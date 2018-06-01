import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div>
                <body>
                    <h3>Contact Form</h3>
                    <div className="container" />
                    <form action="/action_page.php">
                        <label for="fullName">Full Name</label>
                        <input type="text" id="fullName"
                            name="fullName" placeholder="Your name.."></input>

                        <label for="email">Email</label>
                        <input type="text" id="email"
                            email="email" placeholder="Your email.."></input>

                        <label for="message">Message</label>
                        <textarea id='subject' name="subject"
                            style="height:200px"></textarea>

                        <input type="submit" value="Submit"></input>
                        {/* <button className="myButton" href="#"
                    onClick={this.createMessage}>Contact Us</button> */}
                    </form>
                </body>
            </div>


        )
    }
}

export default Contact;