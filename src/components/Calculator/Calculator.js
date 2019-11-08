
import React, { Component } from 'react';
import './Calculator.css';
import Screen from '../Screen/Screen';
import Keypad from '../Keypad/Keypad';

/* main calculator component. Contains our other calculator components */
class Calculator extends Component {

    /* constructor function to set our initial state */
    constructor(props) {
        super(props);

        this.state = {
            equation: '',
            result: 0
        }
    }

    onButtonPress = (event) => {
        console.log("onButtonPressed called");
    }

    render() {
        return (
            <div className="Calculator">
                <Screen equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress()} />
            </div>
        );
    }
}

export default Calculator;