import React, { Component } from 'react';
import './Welcome.css';




class Welcome extends Component {
constructor(){
    super();

    this.state ={
        enter: ''
    };
    this.handleEnter = this.handleEnter.bind(this);
}
handleEnter(){
    this.setState({enter: ''})
}

    render() {
        return (
            <div>
                <body>
                    <div className="header">
                        <p>Let's go Outdoors!</p>
                        <style>
                        @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                    </div>
                    <section className="content">
                        <img src="http://savetreessaveearth.com/wp-content/uploads/2015/06/savetreesaveearth-img1.gif" alt="Tree" />
                    </section>
                   <div className="footer">
                   <button className="myButton" href="#"
                    onClick={this.handleEnter}>Enter</button>
                  
                   </div>
                </body>
            </div>


        )
    }
}

export default Welcome;
