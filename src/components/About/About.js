import React, { Component } from 'react';
import styled from 'styled-components';
import './About.css';

const Title = styled.h1`
position: aboslute;
top: 100px;
font-size: 90px;
text-align:center;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;

`;

class About extends Component {

    render() {
        return (
            <div>
                <Title> About Us </Title>

                <style>
                    @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                <section className="context">
                    <div>Outdoors! Is based in the united States and it was created due to
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
                </div>
                </section>

            </div>

        )
    }
}

export default About;

/* .header{
    top: 20%;
    width:100%;
    height: 20vh;
    padding-left: 25%;
    padding-right: 25%;
    margin-left: 50%;
    margin-right: 50%; 

}
h1{
    position: absolute;
    top: 50px;
    font-size: 90px;
    text-align:left;
    justify-content: flex-start;
    align-content: stretch;
    flex-wrap: nowrap;
    color:#29c72e;
    font-family:'Delius', cursive;
}
.context{
    margin: 0 auto;
    width: 100vw;
    height: 300px;
    padding-left: 80px;
} 
div{
   font-size: 50px;
   text-align: center;
   color: black;
   font-family: 'Lucida Sans', 'Lucida Sans Regular'; 
}  */