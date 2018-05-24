import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-toggle-switch';
import SearchIcon from 'react-icons/lib/md/search';
import ClearIcon from 'react-icons/lib/md/clear';
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css";
import './Search.css'


class Search extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
            switched: false,
            search: '',
            clear: '',
            features: [
                'Field',
                'Picnic Table',
                'Sand',
                'Swing',
                'Bathroom with Changing Tables',
                'Water Fountain',
                'Wood Chips',
                'Rubber floors',
                'Park Bench',
                'Play Structure',
                'Slide',
                'Toddler Swing',
                'Water Park',
                'Parking',
                'Wheel Chair Accessible'
            ]
        };
        this.handleAddressChange = this.handleAddressChange.bind(this);
        this.handlePlaygroundNameChange = this.handlePlaygroundNameChange.bind(this);
        this.toggleSwitch = this.toggleSwitch.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.handleClear = this.handleClear.bind(this);
    }
    handleAddressChange(address) {
        this.setState({ input: address })
    }
    handlePlaygroundNameChange(name) {
        this.setState({ input: name })
    }
    toggleSwitch() {
        this.setState({ switched: !this.state.switched })
    }
    handleSearch(value) {
        this.setState({ search: value })
    }
    handleClear(value) {
        this.setState({ clear: value })
    }
    render() {
        // console.log(this.state.isChecked)
        return (
            <div>
                <ol>
               <li> Field </li> 
               <li> Picnic Table </li> 
               <li> Sand </li>
               <li> Swing </li> 
               <li> Field </li> 
               <li> Bathroom with Changing Tables </li> 
               <li> Water Fountain </li> 
               <li> Wood Chips </li> 
               <li> Rubber floors </li> 
               <li> Park Bench </li> 
               <li> Play Structure </li> 
               <li> Slide </li> 
               <li> Toddler Swing </li> 
               <li> Water Park </li> 
               <li> Parking </li> 
               <li> Wheel Chair Accessible </li> 
                </ol>

                <div>
                    <input value={this.state.input}
                        placeholder="Address"
                        onChange={(e) => this.handleAddressChange(e.target.value)} type="text" />
                    <input value={this.state.input}
                        placeholder="Playground Name"
                        onChange={(e) => this.handlePlaygroundNameChange(e.target.value)} type="text" />
                    <Switch onClick={this.toggleSwitch} on={this.state.switched} />
                    <Link to='/result'> <SearchIcon id="Search_icon"></SearchIcon></Link>
                    <Link to='/search'> <ClearIcon id="Search_icon"></ClearIcon></Link>
                </div>
            </div>
        )
    }
}
export default Search;