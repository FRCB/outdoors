import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    constructor() {
        super();

        this.state = {
            name: '',
            email: '',
            text:''
        };
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.createMessage = this.createMessage.bind(this);

    }
    handleNameChange(name){
    this.setState( {nameChange: name})
    }
    handleEmailChange( email){
        this.setState({ emailChange: email})
    }
    updateText(text){
        this.setState({text})
    }
    createMessage(){
        const{ text } = this.state;
        const{ createMessageFn} = this.props;

        createMessageFn(text);
        this.setState( { text: ''})
    }
    render() {
        const{ text }= this.state;
        return (
            <div className = "Contact Us">
            <input 
            placeholder = "Name"
            onChange={( e ) => this.handleNameChange(e.target.value)} type="text"/>
            <input placeholder = "Email"
            onChange={( e ) => this.handleEmailChange(e.target.value)} type="text"/>
            <input value={text}
            placeholder = "Message"
            onChange={( e ) => this.updateText(e.target.value)}/>
            <button className="myButton" href="#"
            onClick={this.createMessage}>Contact Us</button>
            </div>
        )
    }
}
export default Contact;

