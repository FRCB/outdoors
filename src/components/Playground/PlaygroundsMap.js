import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { google } from 'google-maps-react';
// import SearchBox from './SearchBox';


export default class PlaygroundsMap extends Component {
    // constructor(props) {
    //     super(props);

    //     const { lat, lng } = this.props.initialCenter;
    //     this.state = {
    //         currentLocation: {
    //             lat: lat,
    //             lng: lng
    //         }
    //     }
    //     PlaygroundsMap.propTypes = {
    //         google: React.PropTypes.object,
    //         zoom: React.PropTypes.number,
    //         initialCenter: React.propTypes.object
    //     }
    //     PlaygroundsMap.defaultProps = {
    //         zoom:11,
    //         initialCenter: { lat:40.233844, lng: -111.658534 },
    //         mapTypeId: 'roadmap'
                    
    //     }
    // }
    playground = {
        locations: [
            { name: 'Harvest Park Playground', location: { lat: 40.400517, lng: -111.931699 } },
            { name: 'Riverview Park', location: { lat: 40.294561, lng: -111.664955 } },
            { name: 'Pioneer Park', location: { lat: 40.233059, lng: -111.668294 } },
            { name: 'Memorial Park', location: { lat: 40.234194, lng: -111.644203 } }
        ]
    }

    componentDidUpdate(){
        this.loadMap(); // call loapMap function to load the google map
    }
    // handleEvent(eventsName){
    //     return(e) => {
    //         const eventsName = `on${ camelize(evt)}`
    //         if( this.props[eventsName]){
    //             this.props[eventsName](this.props, this.marker, e);
    //         }
    //     }
    // }

    loadMap() {
        if (this.props && this.props.google) { // checks to make sure that props have been passed
            const { google } = this.props; // sets props equal to google
            const maps = google.maps; //sets maps to google maps props

            const mapRef = this.refs.map; //looks for HTML div ref 'map'.Returned in render below.
            const node = ReactDom.findDOMNode(mapRef); // finds the 'map' div in the React Dom, names it node
            
             //will configure a map depending on your location 
            // const { lat, lng } = this.state.currentLocation;
            // const center = new maps.LatLng(lat, lng);
            // const{ lat, lng} = initialCenter;
            // let {initialCenter, zoom } = this.props;
           

            // const mapConfig = Object.assign({}, {
            //     center: center,
            //     zoom: 11,
            //     mapTypeId: 'roadmap'
            // })

            //Hardcode mapConfig
            const mapConfig = Object.assign( {}, {
                center: { lat:40.233844, lng: -111.658534 }, //sets center of google map to Provo, Utah
                zoom: 11,// sets zoom. Lower numbers are zoomed further out.
                mapTypeId: 'roadmap' // optional main map layer.. Terrain, satellite, hybrid or roadmap -if unspecified, defaults to roadmap.
            })
            this.map = new maps.Map(node, mapConfig); // creates a new Google map on the specified node( ref= 'map') with the specified configuration set above.

            //ADD MARKERS TO MAP
            this.playground.locations.forEach(location => { //iterate through locations saved in state
                const marker = new google.maps.Marker({ // creates a new Google maps Marker object.
                    position: { lat: location.location.lat, lng: location.location.lng }, // sets position of marker to specified location
                    map: this.map, //sets markers to appear on the map we just created on line 29
                    title: location.name // the title of the marker is set to the name of the location

                });
            })
            const eventsName = ['click', 'mouseover']; // lets keep track of the names of the events we want to track with our Marker

        }
    }
    render() {
        const style = { // Must specify dimensions of the Google map or it will not work. Also works best when style is specified inside the render function and created as an object
            width: '90vw',// 90vw basically means take up 90% of the width screen, px also works.
            height: '75vh' // 75vh similarly will take up roughly 75% of the height of the scree, px also works.
        }
        // this.marker = new google.maps.marker(pref);
        // eventsName.forEach( e => {
        //     this.marker.addListener(e, this.handleEvent(e));
        // })

        return ( //in the return function we must return a div with ref='map' and style.
            <div ref="map" style={style}>
                loading map...
                {/* <SearchBox
                placeholder={""}
                onPlacesChanged={this.handleSearch} /> */}
            </div>
        )
    }
}