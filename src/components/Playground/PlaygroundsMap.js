import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { GoogleApiWrapper, InfoWindow, Marker} from 'google-maps-react';

export default class PlaygroundsMap extends Component{
playground = {
    locations: [
        { name: 'Harvest Park Playground', location: {lat:40.400517 , lng:-111.931699}},
        { name: 'Riverview Park', location: {lat: 40.294561, lng:-111.664955}},
        { name: 'Pioneer Park', location: {lat:40.233059 , lng:-111.668294}},
        { name: 'Memorial Park', location: {lat: 40.234194, lng:-111.644203}}
    ]
}

    componentDidUpdate(){
        this.loadMap(); // call loapMap function to load the google map
    }

    loadMap(){
        if (this.props && this.props.google){ // checks to make sure that props have been passed
            const {google}= this.props; // sets props equal to google
            const maps = google.maps; //sets maps to google maps props

            const mapRef = this.refs.map; //looks for HTML div ref 'map'.Returned in render below.
            const node = ReactDom.findDOMNode(mapRef); // finds the 'map' div in the React Dom, names it node

            const mapConfig = Object.assign( {}, {
                center: { lat:40.233844, lng: -111.658534 }, //sets center of google map to Provo, Utah
                zoom: 11,// sets zoom. Lower numbers are zoomed further out.
                mapTypeId: 'roadmap' // optional main map layer.. Terrain, satellite, hybrid or roadmap -if unspecified, defaults to roadmap.
            })
            this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node( ref= 'map') with the specified configuration set above.
            
            //ADD MARKERS TO MAP
            this.playground.locations.forEach( location => { //iterate through locations saved in state
                const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
                    position:{ lat: location.location.lat, lng:location.location.lng}, // sets position of marker to specified location
                    map: this.map, //sets markers to appear on the map we just created on line 29
                    title: location.name // the title of the marker is set to the name of the location
                });
            })
        }
    }
    render(){
        const style = { // Must specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
            width: '90vw',// 90vw basically means take up 90% of the width screen, px also works.
            height: '75vh' // 75vh similarly will take up roughly 75% of the height of the scree, px also works.
        }
        return ( //in the return function we must return a div with ref='map' and style.
            <div ref="map" style={style}>
                loading map...
            </div>
        )
    }
}