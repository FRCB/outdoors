import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { render } from 'react-dom';
import './Facts.css'

const Title = styled.h1`
position: absolute;
top: 100px;
font-size: 50px;
text-align:center;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;

`;

const Subtitle = styled.h6`
position: absolute;
top: 100px;
font-size: 20px;
text-align:center;
color:black;
font-family:'Delius', cursive;
padding-bottom: 25%;
`;
 
class Facts extends Component {
    render(){
        return(
            <div>
             <div className="header">
            <Title> Benefits of Playing Outside:</Title>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                </div>
                <div className="info">
                <Subtitle>
                    <ol>
                        <li> Research as far back as 1885 proves that learners fare better when breaks are incorporated into their efforts. </li>
                        <li>  Albert Einstein said that, “Play is the highest form of research.” </li>
                        <li> Happiness is a byproduct of outdoor play on a playground, and thus "joy begets joy" when kids can continually head outdoors to explore, learn, and grow.</li>
                        <li> Playgrounds are a prime location for allowing kids to maintain and build cardiovascular endurance and health.</li>
                        <li> Studies have demonstrated that physically active students have improved academic performance and easily obtained higher test scores as well
                             as developing a far better outlook toward school. </li>
                        <li> Playgrounds are one of the few places open to children that are not limited by income - rich and poor kids can all meet, play, and learn from one another without adult interference in the playground setting. </li>
                        <li> Nature is the perfect classroom, and playgrounds can be used to teach kids about everything from science and math to vocabulary and poetry. </li>
                        <li>  Conflict resolution is a common skill learned on a playground in early childhood. So, too, are resiliency and self-advocacy..."all of which can help children learn how to develop healthy relationships and to become leaders. </li>
                        <li> Imaginary play is guaranteed whenever a child is on a playground, and this in turn fosters the growth of individual imagination, problem solving, and personal development.</li>
                        <li> Playgrounds, as you now see, are more than just areas where kids can be kept busy or "go run around outside" for a while. They are a major part of development, and should be seen as vital to the community.</li>   
            
                    </ol>
                    </Subtitle>
                    </div>
                    <p>For more information please visit: https://www.aaastateofplay.com/77-reasons-kids-need-playgrounds/</p>
                    </div>
        )
    }
}

export default Facts;