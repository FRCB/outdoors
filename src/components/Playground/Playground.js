import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from 'react-icons/lib/md/search';
import ArrowBackIcon from 'react-icons/lib/md/arrow-back';
import FavoriteIcon from 'react-icons/lib/md/favorite-border';
import InformationIcon from 'react-icons/lib/md/info-outline';
import './Playground.css'

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
            <div className="Playgrounds Map">
                {/* Navegation top left */}
                <Link to='/search'> <SearchIcon id="Search_icon"></SearchIcon></Link>
                {/* Navegation top right */}
                <Link to='/'> <ArrowBackIcon id="Arrow_Back"></ArrowBackIcon></Link>
                {/* Footer bottom left */}
                <Link to='/favorites'> <FavoriteIcon id="Favorite_icon"></FavoriteIcon></Link>
                {/* Footer bottom left */}
                <Link to='/about'> <InformationIcon id="Information_icon"></InformationIcon></Link>
            </div>
        )
    }
}
export default Playground;
