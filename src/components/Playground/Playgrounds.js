import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import './Playground.css'

const Title = styled.h1`
position: absolute;
top: 100px;
font-size: 80px;
text-align:left;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;

`;

class Playgrounds extends Component{
    constructor(){
        super();

        this.state = {
            playgrounds:[]
        }
      
    }
    componentDidMount(){
        axios.get('/api/playgrounds').then(results => {
           
          this.setState( {playgrounds: results.data});
        }).catch((err) => console.log('could not get playgrounds', err));
      }
      renderPlaygrounds(){
       console.log(this.state.playgrounds)
        let playgrounds = this.state.playgrounds.map((playground, index) => {
            if( playground.image_url){
            
                return(
                 <Link key={ index } to={`/playground/${playground.id}`}>
              <img style={{width:'500px'}} src={playground.image_url}/>
                </Link>
                )}   
          })
          return playgrounds;
      }
      render(){
        console.log(this.state);
        
          
     
          return(
              <div className="header">
                  <Title> Top Playgrounds in Provo </Title>
                  <style>
                @import url('https://fonts.googleapis.com/css?family=Delius');
                </style>
                <div className="playgrounds_content">
                  {this.renderPlaygrounds()}
                  </div>

              </div>
          )
      }
}

export default Playgrounds;