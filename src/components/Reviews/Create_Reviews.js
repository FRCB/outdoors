import React, { Component } from 'react';

export default class CreateReviews extends Component {
    constructor(){
        super();

        this.state = {
            text: ''
        };

        this.createReview = this.createReview.bind(this);
    }
    updateText( event ){
        this.setState({ text: event.target.value });
    }
    createReview(event){
        event.preventDefault();
        this.setState({ text: ''})
    }
    render(){
        const{ text }= this.state;

        return(
            <section>
            <div>
                <input className="create_input"
                placeholder="Leave a review about the playgrounds you visit"
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