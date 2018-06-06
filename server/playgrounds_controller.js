module.exports = {
    createPlayground: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { name, address, city, state, zip,image_url, reviews } = req.body;
        playground = { id: playgrounds[playgrounds.length - 1].d + 1 }

        playgrounds.push(playgrounds);
        
        dbInstance.create_playground([name, address, city, state, zip,image_url, reviews])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send());
    },
    getPlayground: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params } = req;
       console.log(req.params);
        dbInstance.read_playground([ req.params.id, req.query.desc ])
        .then( playground => res.status(200).send(playground[0]))
        .catch( (error) => { 
            console.log(error);
             res.status(500).send()}
            );
    },
    getPlaygrounds: (req, res, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_playgrounds()
        .then( playgrounds => res.status(200).send( playgrounds) )
        .catch( () => res.status(500).send() );
    },
    updatePlayground: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        const updateId = req.params.id;
        const { playground } = req.body;

        // const playgroundIndex = playgrounds.findIndex(playground => playground.id == updateId);

        // playground[playgroundsIndex] = { id: playground.id || playground };

        dbInstance.update_playground([params.id, query.desc ])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send());
    },
    deletePlayground: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let { params} = req;

        playgrounds.forEach((playground, index) => {
            playgrounds.splice(index, 1)
        })

        dbInstance.delete_playground([params.id])
        .then( () => res.status(200).send(playgrounds))
        .catch( () => res.status(500).send());
    }
};