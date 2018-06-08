import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchIcon from 'react-icons/lib/md/search';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import FavoriteIcon from 'react-icons/lib/md/favorite-border';
import InformationIcon from 'react-icons/lib/md/info-outline';
import { GoogleApiWrapper } from 'google-maps-react';
import styled from 'styled-components';
import Playgrounds from './Playgrounds';


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
            input: '',
            playground: {}
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handlePreviousPage = this.handlePreviousPage.bind(this);
        this.handleAddFavorites = this.handleAddFavorites.bind(this);
        this.handleInformation = this.handleInformation.bind(this);
    }
    handleAdd(input){
        this.setState({input:''})
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

    componentDidMount() {
        let { id } = this.props.match.params;
        axios.get(`/api/playgrounds/${id}`).then(result => {
            this.setState({ playground: result.data });
        }).catch((err) => console.log('could not get playground', err));
    }
   
    render() {
        console.log(this.state.playground);
        return (
            <div className="header">

                <Title>{ this.state.playground.name} </Title>
                <style>
                    @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>

                <div className="playgrounds_content">

                    <img style={{width:'500px'}} src={this.state.playground.image_url}/>
                    <h2>{`Address: ${this.state.playground.address}`}</h2>
                    <h2>{`City: ${this.state.playground.city}`}</h2>
                    <h2>{`State: ${this.state.playground.state}`}</h2>
                    <h2>{`Zip: ${this.state.playground.zip}`}</h2>
                    <h2>{`Reviews: ${this.state.playground.reviews}`}</h2>
                <Link to='/reviews'>
                <Button onClick={this.handleAdd}>Add a Review </Button>
                </Link>
                </div>

                <div className="top-left">
                    <Link to='/search'> <SearchIcon id="Search_icon"></SearchIcon></Link>
                </div>

                <div className="top-rigth">
                    <Link to='/'> <ArrowBackIcon id="Arrow_Back"></ArrowBackIcon></Link>
                </div>

                <div className="bottom">
                    <Link to='/favorites'> <FavoriteIcon id="Favorite_icon"></FavoriteIcon></Link>
                    <Link to='/facts'> <InformationIcon id="Information_icon"></InformationIcon></Link>
            
                </div>
            </div>

        )
    }
}
export default Playground;
