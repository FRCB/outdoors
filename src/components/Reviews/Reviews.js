import React, { Component } from 'react';
import Create_Reviews from './Create_Reviews';
import Update_Reviews from './Update_Reviews';
import axios from 'axios';
// import './Reviews.css';

class Reviews extends Component {
    constructor() {
        super();

        this.state = {
            reviews: [],
            input:''
        };
        this.createReview = this.createReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
    }
    handleInputChange(value){
        this.setState({ input: value });
    }
    handleAdd(){
        this.props.add(this.state.input);
        this.setState({ input: ''})
    }
    deleteReview(){
        Reviews.remove(this.props.review.id);
    }
    componentDidUpdate() {
        axios.get('/api/reviews').then(results => {
            this.setState({ reviews: results.data });
        }).catch((err) => console.log('could not get the reviews', err));
    }
    createReview([ playground_id, reviewer_name, rating, content]) {
        axios.post('/api/reviews', {playground_id},{reviewer_name}, {rating},{content}).then(results => { this.setState({playground_id: results.data}),({ reviewer_name: results.data }),({ rating: results.data }), ({content: results.data })
    }).catch((err) => console.log('could not create a review', err));
    }
    updateReview([ playground_id, reviewer_name, rating, content]) {
        axios.put('/api/reviews?id=${ id }', {playground_id},{reviewer_name}, {rating},{content}).then(results => 
               { this.setState({playground_id: results.data}),({ reviewer_name: results.data }),({ rating: results.data }), ({content: results.data })
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
                            updateReviewFn = { this.updateReview }
                            deleteReviewFn = { this.deleteReview }/>
                    ))
                }
                <button onClick={ this.handleAdd}>Add Review </button>
                <button onClick={ this.deleteReview}>Delete</button>
                <button onClick={ this.updateReview}>Update</button>
            </section>
            </div>
        );
    }
}

export default Reviews;
