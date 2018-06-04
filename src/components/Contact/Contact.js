import React, { Component } from 'react';
import styled from 'styled-components';
import './Contact.css';

const Title = styled.h1`
position: relative;
font-size: 90px;
text-align:center;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;

`;

class Contact extends Component {
    constructor(){
        super();

        this.state= {
            name: '',
            email: '',
            message: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNameChange(name){
        this.setState({ nameChange: name});
    }
    handleEmailChange(email){
        this.setState({ emailChange: email});
    }
    handleMessageChange(message){
        this.setState({ messageChange: message});
    }
    handleSubmit(){
        alert('Thank you for your Message! We will contact you shortly');
    }
    render() {
        return (
            <div>
                <Title>Contact Us</Title>
                <div className="container" >
                    <form action="/action_page.php">
                        <div className='row'>
                            <div className="col-25">
                                <label htmlFor="fullName">Full Name</label>
                            </div>
                            <div className="col-75">
                                <input onChange={ ( e ) => this.handleNameChange(e.target.value)}
                                type="text" id="fullName"
                                name="fullName" placeholder="Your name.."></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="email">Email</label>
                            </div>
                            <div className="col-75">
                                <input onChange={ ( e ) => this.handleEmailChange(e.target.value)}
                                type="text" id="email"
                                email="email" placeholder="Your email.."></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-25">
                                <label htmlFor="message">Message</label>
                            </div>
                            <div className="col-75">
                                <textarea id='subject' name="subject"
                                    style={{ height: 200 }}></textarea>
                            </div>
                        </div>
                        <div className="row">
                            <button className="myButton" href="#"
                                onClick={ this.handleSubmit }>Submit</button>
                        </div>
                    </form>
                </div>

            </div>


        )
    }
}

export default Contact;