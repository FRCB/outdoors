import React, { Component } from 'react';

export default class Update extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: props.text
        };

        this.updateReview = this.updateReview.bind(this);
    }
    updateText(value) {
        this.setState({ text: value });
    }
    updateReview() {
        const { text } = this.state;
        const { id, updateReviewFn, hideEdit } = this.props;

        updateReviewFn(id, text);
        hideEdit();
    }
    render() {
        const { hideEdit } = this.props;
        const { text } = this.state;

        return (
            <section className="Edit_parent">
                <textarea className="Edit_textarea"
                    value={text} onChange={(e) => this.updateReview(e.target.value)}></textarea>
                {/* This saves your changes made*/}
                <div className="Edit_controls">
                    <button id="Edit_controls-update"
                        className="Edit_control-btn"
                        onClick={this.updateReview}>

                        Update
    </button>

                    <button id="Edit_controls_cancel"
                        className="Edit_control-btn"
                        onClick={hideEdit}>

                        Cancel
                    
    </button>
                </div>
            </section>
        )
    }

}