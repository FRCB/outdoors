import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';




class Welcome extends Component {
constructor(){
    super();

    this.state ={
        login: ''
    };
    this.handleLogin = this.handleLogin.bind(this);
}
handleLogin(){
    this.setState({login: ''})
}

    render() {
        return (
            <div>
                <body>
                    <div className="header">
                        <p>Let's go Outdoors!</p>
                        <style>
                        @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                    </div>
                    <section className="content">
                        <img src="http://savetreessaveearth.com/wp-content/uploads/2015/06/savetreesaveearth-img1.gif" alt="Tree" />
                    </section>
                   <div className="footer">
                   <Link to='https://auth0.auth0.com/login?state=KFCQiojCMFcoesNN8pgzxheij17Zp1sv&client=zEYfpoFzUMEzilhkHilcWoNkrFfJ3hAI&protocol=oauth2&response_type=code&redirect_uri=https%3A%2F%2Fmanage.auth0.com%2Fcallback&scope=openid%20profile%20name%20email%20nickname%20created_at'> <button className="myButton" href="#"
                    onClick={this.handleLogin}>Enter</button></Link>
                  
                   </div>
                </body>
            </div>


        )
    }
}

export default Welcome;
