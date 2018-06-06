import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Switch from 'react-toggle-switch';
import SearchIcon from 'react-icons/lib/md/search';
import ClearIcon from 'react-icons/lib/md/clear';
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css";
import PlaygroundsMap from '../Playground/PlaygroundsMap';
import styled from 'styled-components';
import './Search.css'

const Title = styled.h1`
position: absolute;
top: 100px;
font-size: 80px;
text-align:center;
color:#29c72e;
font-family:'Delius', cursive;
padding-bottom: 25%;

`;

class Search extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
            switched: false,
            search: '',
            clear: '',

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
                <div className="header">
                    <Title> Playgrounds Search </Title>
                    <style>
                        @import url('https://fonts.googleapis.com/css?family=Delius');
                    </style>
                </div>

                <div className="search_content">
                    <div>
                        {/* <PlaygroundsMap google={this.props.google} /> */}
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
            </div>
        )
    }
}
export default Search;