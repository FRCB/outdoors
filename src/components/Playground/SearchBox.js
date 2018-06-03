import React, { Component } from 'react';
import ReactDom from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import { google } from 'google-maps-react';
var Grid = require('semantic-ui-react').Grid;
var Form = require('semantic-ui-react').Form;
var Button = require('semantic-ui-react').Button;
var Input = require('semantic-ui-react').Input;
var Icon = require('semantic-ui-react').Icon;

var withGoogleMap = require("react-google-maps").withGoogleMap;
var GoogleMap = require("react-google-maps").GoogleMap;
var SearchBox = require('../../node_modules/react-google-maps/src/lib/places/SearchBox').default;

const SearchBoxExampleGoogleMap = withGoogleMap(props => (


    <GoogleMap
        ref={props.onMapMounted}
        defaultZoom={15}
        center={props.center}
        onBoundsChanged={props.onBoundsChanged}
    >
        <SearchBox
            ref={props.onSearchBoxMounted}
            bounds={props.bounds}
            controlPosition={window.google.maps.ControlPosition.TOP_LEFT}
            onPlacesChanged={props.onPlacesChanged}
            inputPlaceholder="Customized your placeholder"
            inputStyle={INPUT_STYLE}
        />
        {props.markers.map((marker, index) => (
            <Marker position={marker.position} key={index} />
        ))}
    </GoogleMap>
));


class SearchBox extends Component {
    constructor(props) {
        super();

        this.state = {
            bounds: null,
            center: {
                lat: 47.62055588,
                lng: -122.3212725,
            },
            markers: [],
        };
        this.handleMapMounted = this.handleMapMounted.bind(this);
        this.handleBoundsChanged = this.handleBoundsChanged.bind(this);
        this.handleSearchBoxMounted = this.handleSearchBoxMounted.bind(this);
        this.handlePlacesChanged = this.handlePlacesChanged.bind(this);
    }
    handleMapMounted(map) {
        this._map = map;
    }
    handleBoundsChanged() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter(),
        });
    }
    handleSearchBoxMounted(searchBox) {
        this._searchBox = searchBox;
    }
    handlePlacesChanged() {
        const places = this._searchBox.getPlaces();

        //Add a marker for each place returned from search bar
        const markers = places.map(place => ({
            position: place.geometry.location,
        }));
        // Set markers; set map center to first search result

        const mapCenter = markers.length > 0 ? markers[0].position : this.state.center;

        this.setState({
            center: mapCenter,
            markers,
        });
    }
    render() {
        console.log(SearchBox);
        return (
            <div style={{ height: `400px` }}>
                <searchBox
                    containerElement={
                        <div style={{ height: `100%` }} />
                    }
                    mapElement={
                        <div style={{ height: `100%` }} />
                    }
                    center={this.state.center}
                    onMapMounted={this.handleMapMounted}
                    onBoundsChanged={this.handleBoundsChanged}
                    onSearchBoxMounted={this.handleSearchBoxMounted}
                    bounds={this.state.bounds}
                    onPlacesChanged={this.handlePlacesChanged}
                    markers={this.state.markers}
                />
    
            </div>
        )
    }
}

export default SearchBox;