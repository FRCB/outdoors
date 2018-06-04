import React, { Component } from 'react';
import styled from 'styled-components';


const Title = styled.h1`
position: absolute;
top: 100px;
font-size: 80px;
text-align:center;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;

`;
class Favorites extends Component {
   

    render() {
        return (
            <div>
            <div className="header">
                
                <Title>Favorite Playgrounds</Title>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                    </div>
                < img src="http://savetreessaveearth.com/wp-content/uploads/2015/06/savetreesaveearth-img1.gif" alt="Tree" />
            </div>
        )
    }
}

export default Favorites;