import React, { Component } from 'react';
import Create_Reviews from './Create_Reviews';
import Update_Reviews from './Update_Reviews';
import axios from 'axios';
// import './Reviews.css';

class Reviews extends Component {
    constructor() {
        super();

        this.state = {
            reviews: []
        };
        this.createReview = this.createReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
    }
    componentDidUpdate() {
        axios.get('/api/reviews').then(results => {
            this.setState({ reviews: results.data });
        }).catch((err) => console.log('could not get the reviews', err));
    }
    createReview(text) {
        axios.post('/api/reviews', { text }).then(results => {
            this.setState({ reviews: results.data });
        }).catch((err) => console.log('could not create a review', err));
    }
    updateReview(id, text) {
        axios.put('/api/reviews?id=${ id }', { text }).then(results => {
            this.setState({ reviews: results.data });
        }).catch((err) => console.log('could not update the review', err));
    }
    deleteReview(id) {
        axios.delete('/api/reviews?id={ id}').then(results => {
            this.setState({ reviews: results.data });
        }).catch((err) => console.log('could not delete review', err));
    }
    render() {
        const { reviews } = this.state;

        return (
            <div>
            <div className="parent_div">
                <title>Reviews</title>
            </div>
            <section className="parent_content">
                < Create_Reviews createReviewsFn={ this.createReview}/>
                {
                    reviews.map(review => (
                    <Update_Reviews key={ review.id}
                            id={ review.text}
                            date={ review.date}
                            updateReviewFn = { this.updateReview }
                            deleteReviewFn = { this.deleteReview }/>
                    ))
                }
            </section>
            </div>
        );
    }
}

export default Reviews;
