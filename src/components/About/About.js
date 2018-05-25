import React, { Component } from 'react';
import './About.css';

class About extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>

                <div className="title">About Outdoors!</div>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                <p>Outdoors! Is based in the united States and it was created due to
                    the fact that I love the outdoors and taking the kids to the parks.
                    The idea about creating an app that will have a list of playgrounds
                    and its features came to me while  I was working as a nanny.
                    I will spend a considerable amount of time looking at the map on my
                     phone trying to find new parks to take the kids to. Once yelp came out,
                     I used to search there as well for reviews and comments about the playgrounds
                     in our area. After, lots of years of searching and getting to know the local
                     playgrounds, I created a list of my favorites and I sent it to friends with
                     kids and other nannies. However, once I moved I realized that I needed to start
                     again, and the need to create the app became more evident.
                </p>

            </div>
        )
    }
}

export default About;