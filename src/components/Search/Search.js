import React, { Component } from 'react';
import Switch from 'react-toggle-switch';
import "../../../node_modules/react-toggle-switch/dist/css/switch.min.css" 



class Search extends Component {
    constructor() {
        super();

        this.state = {
            input: '',
            switched: false,
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
    }
    handleAddressChange(address) {
        this.setState({ input: address })
    }
    handlePlaygroundNameChange(name) {
        this.setState({ input: name })
    }
    toggleSwitch(){
        this.setState({ switched: !this.state.switched})
    }
  

    render() {
        // console.log(this.state.isChecked)
        return (
            <div>
                <input value={this.state.input}
                    placeholder="Address"
                    onChange={(e) => this.handleAddressChange(e.target.value)} type="text" />
                <input value={this.state.input}
                    placeholder="Playground Name"
                    onChange={(e) => this.handlePlaygroundNameChange(e.target.value)} type="text" />
                <Switch onClick={this.toggleSwitch} on={this.state.switched}/>
            
            </div>
        )
    }
}
export default Search;