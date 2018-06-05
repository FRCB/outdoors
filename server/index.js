require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const session = require('express-session');
const passport = require('passport');
const Auth0Strategy = require('passport-auth0');
const playgrounds_controller = require('./playgrounds_controller');
const reviews_controller = require('./reviews_controller');

const app = express();
// app.use( express.static( `${__dirname}/../build` ) );
const {
    SERVER_PORT,
    SESSION_SECRET,
    DOMAIN,
    CLIENT_ID,
    CLIENT_SECRET,
    CALLBACK_URL,
    CONNECTION_STRING

} = process.env;

massive(process.env.CONNECTION_STRING).then(dbInstance => {
    console.log('db connected')
    app.set('db', dbInstance)
}).catch(() => console.log("couldn't connected"))

app.use(bodyParser.json());
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile email'
}, (accessToken, refreshToken, extraParams, profile, done) => {
    let db = app.get('db');
    console.log(profile);
    let { displayName, picture, id,} = profile;
    let email = profile.emails[0].value;
    db.find_user([id]).then((foundUser) => {
        if (foundUser[0]) {
            done(null, foundUser[0].id)
        } else {
            db.create_user([displayName, picture,  id,email]).then((user) => {
                done(null, user[0].id)
            }).catch(console.log)
        }
    }).catch(console.log)
}))
passport.serializeUser((id, done) => {
    done(null, id);
})
passport.deserializeUser((id ,done) => {
    app.get('db').find_session_user( [id]).then((user) =>{
        done(null, user[0])
    }).catch(console.log)
})
app.get('/login', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/playground'
}))
app.get('/auth/me', function(req, res) {
    if(req.user) {
        res.status(200).send(req.user);
    } else {
        res.status(401).send('Nice try')
    }
})
app.get('/auth/logout', (req, res) => {
    req.logOut();
    return res.redirect('http://localhost:3003/#/');
  })
app.get('https://maps.googleapis.com/maps/api/streetview?key=AIzaSyBBImf1N2mgdkR0oqyKQSEbSjmJrAfiRrg')
app.post('api/playgrounds', playgrounds_controller.createPlayground);
app.get('api/playgrounds', playgrounds_controller.getPlayground);
app.get('api/playgrounds', playgrounds_controller.getPlaygrounds);
app.put('api/playgrounds/:id', playgrounds_controller.updatePlayground);
app.delete('api/playgrounds/:id', playgrounds_controller.deletePlayground);


app.post('api/reviews', reviews_controller.createReviews);
app.get('api/reviews', reviews_controller.getReview);
app.get('api/reviews', reviews_controller.getReviews);
app.put('api/reviews/:id', reviews_controller.updateReview);
app.delete('api/reviews/:id', reviews_controller.deleteReview);

const port = process.env.PORT || 3002;
app.listen(port, () => console.log(`Lets go Outdoors!! ${port}`))