import React, { Component } from 'react';

export default class CreateReviews extends Component{
    constructor(){
        super();

        this.state = {
            text: ''
        };

        this.createReview = this.createReview.bind(this);
    }
    updateText( text ){
        this.setState( { text });
    }
    createReview(){
        const{ text } = this.state;
        const{  createReviewFn }=this.props;

        createReviewFn( text );
        this.setsState({ text: ''})
    }
    render(){
        const{ text }= this.state;

        return(
            <section>
            <div>
                <input className="create_input"
                placeholder=" Leave a review about the playgounds you visit"
                value={ text }
                onChange={ ( e ) => this.updateText( e.target.value)}/>
            </div>

            <div className="create_bottom">
           <button onClick={ this.createReview }> Compose </button>
            </div>
            </section>
        )
    }
}