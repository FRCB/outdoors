import React, { Component } from 'react';
import Create_Reviews from './Create_Reviews';
import Update_Reviews from './Update_Reviews';
import axios from 'axios';
// import './Reviews.css';

class Reviews extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            reviews: '',

            
        };
        this.createReview = this.createReview.bind(this);
        this.updateReview = this.updateReview.bind(this);
        this.deleteReview = this.deleteReview.bind(this);    
    }

    handleNameChange(name){
        this.setState({ nameChange: name});
    }
   handleReviewsChange( reviews ){
       this.setState( { reviewsChange: reviews});
   }
    componentDidUpdate() {
        axios.get('/api/reviews').then(results => {
            this.setState({ reviews: results.data });
        }).catch((err) => console.log('could not get the reviews', err));
    }
    createReview( playground_id,name,reviews) {
        axios.post('/api/reviews', {playground_id},{name}, {reviews}).then(results => { this.setState({playground_id: results.data}),({name: results.data }), ({reviews: results.data })
    }).catch((err) => console.log('could not create a review', err));
    }

    updateReview(playground_id, name,review) {
        axios.put('/api/reviews?id=${ id }', {playground_id},{name}, {review}).then(results => 
               { this.setState({playground_id: results.data}),({ name: results.data }), ({review: results.data })
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
            <form
            action="/action_page.php">
            <div className="col-25"></div>
            <label htmlFor="Name of the Playground"> Name of the Playground </label>
            <input onChange={ ( e ) => this.handleNameChange( e.target.value)}
            type="text"
            id=" name of the playground"
            placeholder="enter the name of the playground.."></input>
            <div className="row">
                <div className="col-25">
                    <label htmlFor="reviews">Reviews</label>
                    <div className="col-75">
                        <input onChange={ ( e ) => this.handleReviewsChange (e.target.value)}
                        type="text"
                        id="reviews"
                        placeholder= " Your reviews.."
                        style={{ height: 200}}></input>
                    </div>
                </div>
            </div>
            <section className="parent_content">
                < Create_Reviews createReviewsFn={ this.createReview}/>
                {/* {
                    reviews.map(review => (
                    <Update_Reviews key={ review.id}
                            id={ review.id}
                            updateReviewFn = { this.updateReview }
                            deleteReviewFn = { this.deleteReview }/>
                    ))
                } */}
                <button onClick={ this.createReview}>Add Review </button>
                <button onClick={ this.deleteReview}>Delete</button>
                <button onClick={ this.updateReview}>Update</button>
            </section>
            </form>
            </div>
           
        );
    }
}

export default Reviews;
