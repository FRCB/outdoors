import React, { Component } from 'react';
import styled from 'styled-components';
import './About.css';

const Title = styled.h1`
position: fixed;
top: 100px;
font-size: 90px;
text-align:center;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;

`;
const P = styled.h4`
margin: auto;
width: 50%;
padding: 10px;
font-size: 80px;
text-align: center;
color: black;
font-family: 'Roboto Condensed', sans-serif;

`
export default class About extends Component {

    render() {
        return (
            <div>
                <div className="header">
                    <Title> About Us </Title>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                    </div>
                    <div className="content">
                    <p>   Hi! I am Wanda Uzcategui and I Welcome you once more to Let's go Outdoors!
                        Let's go Outdoors was born from an idea that I had years ago while working with children.
                         I used to spent a lot of time looking at maps and searching for new places to take the kids out and I realized that we always visited the same playgrounds.
                        Since, I believe in the power of playing and spending time outdoors and also of visiting new places and getting involve with the community. I created a spreadsheet with the most outstaings playgrounds in the city, this list had details from how
                         stroller accesible the playground was to bathroom facilities and activities that took places there.
                    </p>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');
</style>

                </div>

                <div className="row">
                    <div className="column"><picture src="https://i.pinimg.com/736x/a7/d6/a5/a7d6a5db41b6c82527ae4ee19021733c--plays-kid.jpg" alt="Play Empowers" style={{ width: 300, heigth: 300 }} /></div> 
                    <div className="column"><picture src="https://i.pinimg.com/564x/21/b2/d5/21b2d5f841babae6f8a1de887d081b75.jpg" alt="Play Enriches" style={{ width: 300, heigth: 300 }} /> </div> 
                    <div className="column"><picture src="https://i.pinimg.com/564x/f6/b1/bc/f6b1bc0da63ca0d470b38ce3b2ece604.jpg" alt="Play Builds" style={{ width: 300, heigth: 300 }} /> </div>
                </div>
            </div>







        )
    }
}
