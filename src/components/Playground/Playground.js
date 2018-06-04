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
position: absolute;
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
            <div className="header">
            <PlaygroundsMap />
                <Title>Playgrounds Map</Title>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                    <div className="top-left">
                {/*------ Top Left----*/}
                <Link to='/search'> <SearchIcon id="Search_icon"></SearchIcon></Link>
                </div>
                <div className="top-rigth">
                {/*-----Top Right-------*/}
                <Link to='/'> <ArrowBackIcon id="Arrow_Back"></ArrowBackIcon></Link>
                </div>
                <div className="bottom">
                {/*--------Bottom left -----*/}
                <Link to='/favorites'> <FavoriteIcon id="Favorite_icon"></FavoriteIcon></Link>
                { /*-------- Bottom right ------*/}
                <Link to='/facts'> <InformationIcon id="Information_icon"></InformationIcon></Link>
                {/* <input id="pac-input" class="controls" type="text" placeholder="Search Box" /> */}
                </div>
            </div>

        )
    }
}
export default GoogleApiWrapper({ apikey: 'AIzaSyBBImf1N2mgdkR0oqyKQSEbSjmJrAfiRrg',  libraries: ['places'] })(Playground);
