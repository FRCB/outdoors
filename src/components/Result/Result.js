import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from 'react-icons/lib/md/favorite-border';
import DirectionsIcon from 'react-icons/lib/md/directions';
import ReviewsIcon from 'react-icons/lib/ti/message';
import ThumbsUPIcon from 'react-icons/lib/ti/thumbs-up';
import axios from 'axios';
import './Result.css';
class Result extends Component{
    constructor(){
        super();

        this.state = {
            map: '',
            rating:'',
            reviews:'',
            favorite: '',
            directions:''
        };
        this.handleRatingCount = this.handleRatingCount.bind(this);
        this.handleAddReviews = this.handleAddReviews.bind(this);
        this.handleAddFavorites = this.handleAddFavorites.bind(this);
        this.handleGetDirections = this.handleGetDirections.bind(this);
    }
handleRatingCount(rating){
    this.setState({ratingCount: rating})
}
handleAddReviews(reviews){
    this.setState({ addReviews: reviews})
}
handleAddFavorites(favorites){
    this.setState({addFavorites: favorites})
}
handleGetDirections(directions){
    this.setState({getDirections: directions})
}
componentDidMount(){
    axios.get('https://maps.googleapis.com/maps/api/streetview?location=41.403609,2.174448&size=456x456&key=AIzaSyDi_ANtlUueF2com6-LYfFsyvE32hf59Ao').then((response) => {
        this.setState({map: response.data})
    })
}

    render(){
        return(
            <div className="Name of Park">
                <Link to='/reviews'> <ThumbsUPIcon id="Rating_icon"></ThumbsUPIcon></Link>
                <Link to='/reviews'> <ReviewsIcon id="Reviews_icon"></ReviewsIcon></Link>
                <Link to='/favorites'> <FavoriteIcon id="Favorite_icon"></FavoriteIcon></Link>
                <Link to='/playground'> <DirectionsIcon id="Directons_icon"></DirectionsIcon></Link>
            </div>
        )
    }
}
export default Result;

