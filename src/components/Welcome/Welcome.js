import React, { Component } from 'react';
import './Welcome.css'

class Welcome extends Component {
    constructor() {
        super()
    }

    render() {
        return (
           <div className="Welcome">
               <nav>
               <section className="content">
            <div className="title">Let's go Outdoors!</div>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                    </section>
                    <section className="container">
                < img src="http://savetreessaveearth.com/wp-content/uploads/2015/06/savetreesaveearth-img1.gif" alt="Tree" />
                </section>
                </nav>
            </div>
    
           
        )
    }
}

export default Welcome;
