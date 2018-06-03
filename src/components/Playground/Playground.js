import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from 'react-icons/lib/md/search';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import FavoriteIcon from 'react-icons/lib/md/favorite-border';
import InformationIcon from 'react-icons/lib/md/info-outline';
import { GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';
import PlaygroundsMap from './PlaygroundsMap';

import './Playground.css'

const Title = styled.h1`
position: aboslute;
top: 100px;
font-size: 90px;
text-align:center;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;

`;

class Playground extends Component {
    constructor() {
        super();

        this.state = {
            search: '',
            previousPage: '',
            favorites: '',
            information: '',
        };
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleAddFavorites = this.handleAddFavorites.bind(this);
        this.handleInformation = this.handleInformation.bind(this);
    }
    handleSearch(value) {
        this.setState({ search: value })
    }
    handlePreviousPage(previousPage) {
        this.setState({ previousPage: previousPage })
    }
    handleAddFavorites(favorites) {
        this.setState({ addFavorites: favorites })
    }
    handleInformation(information) {
        this.setState({ information: information })
    }

    render() {
        return (
            <div>
            <PlaygroundsMap google={this.props.google} />
                <Title>Playgrounds Map</Title>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                {/* Navegation top left */}
                <Link to='/search'> <SearchIcon id="Search_icon"></SearchIcon></Link>
                {/* Navegation top right */}
                <Link to='/'> <ArrowBackIcon id="Arrow_Back"></ArrowBackIcon></Link>
                {/* Footer bottom left */}
                <Link to='/favorites'> <FavoriteIcon id="Favorite_icon"></FavoriteIcon></Link>
                {/* Footer bottom left */}
                <Link to='/about'> <InformationIcon id="Information_icon"></InformationIcon></Link>
                 <PlaygroundsMap google={this.props.google} />
            </div>

        )
    }
}
export default GoogleApiWrapper({ apikey: 'AIzaSyAcCRT99pvtkGrVDMWKRwrFJQC94OITMGw',  libraries: ['places'] })(Playground);
/* 
.Search__parent {
    height: 100%;
    display: flex;
    align-items: center;
    margin: 0px 10px;
  }
  
  .Search__parent input {
    border-radius: 21px;
    border: 1px solid #2aabe2;
    outline: none;
    padding: 9px 34px 8px 12px;
    font-size: 12px;
  }
  
  .Search__content {
    position: relative;
  }
  
  #Search__icon {
    font-size: 20px;
    position: absolute;
    top: 6px;
    right: 12px;
    cursor: pointer;
  } */