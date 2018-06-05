module.exports = {
    createReviews: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { id, playground_id, reviewer_name, rating, content} = req.body;
        // reviews = { id: reviews[reviews.length - 1].d + 1 }

        //reviews.push(playgrounds);
        
        dbInstance.create_review([ id, playground_id, reviewer_name, rating, content])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send());
    },
    getReview: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params }= req;

        dbInstance.read_review([ params.id ])
        .then( playground => res.status(200).send(playground))
        .catch( () => res.status(500).send());
    },
    getReviews: (res, req, next ) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_reviews()
        .then( reviews => res.status(200).send( reviews) )
        .catch( () => res.status(500).send() );
    },
    updateReview: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const { params, query } = req;
        // const updateId = req.params.id;
        // const { review } = req.body;

        // const reviewIndex = reviews.findIndex(review => review.id == updateId);
        // review[reviewsIndex] = { id: review.id || review };

        dbInstance.update_review([params.id, query.desc ])
        .then( () => res.status(200).send())
        .catch( () => res.status(500).send());
    },
    deleteReview: (req, res, next) => {
        const dbInstance = req.app.get('db');
        let { params} = req;

        // review.forEach((review, index) => {
        //     review.splice(index, 1)
        // })

        dbInstance.delete_review([params.id])
        .then( () => res.status(200).send(reviews))
        .catch( () => res.status(500).send());
    }
};