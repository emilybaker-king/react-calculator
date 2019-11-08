
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

    clear() {
        this.setState({ equation: '', result: 0 });
    }

    /* function that is called when any of the ketpad buttons are pressed */
    onButtonPress = (event) => {
        let equation = this.state.equation;
        const pressedButtonValue = event.target.innerHTML;

        console.log(pressedButtonValue);

        if (pressedButtonValue === 'C') {
            this.clear();
            return;
        } else if ((pressedButtonValue >= '0' && pressedButtonValue <= '9') || pressedButtonValue === '.') {
            /* if the user has pressed a button with a value between 0 and 9 or a period, add that value to the equation */
            equation += pressedButtonValue;
        } else if (['+', '-', '*', '/', '%'].indexOf(pressedButtonValue) !== -1) {
            /* if the user has pressed a button with the value of an operator, add the operator to the equation with a space on either side */
            equation += ' ' + pressedButtonValue + ' ';
        } else if (pressedButtonValue === "=") {
            /* if the user hits the enter button, calculate stuff */
            /* Try catch blocks - try to run the code block. if it fails and throws an error, deal with it in the catch block */
            try {
                const evalResult = eval(equation);
                const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                this.setState({ result });
            } catch (error) {
                /* if an error occurs, print it to the console and alert the user */
                console.log(error);
                alert('An error occured. Check to make sure your equation is correct.');
            }

        } else {
            /* if the user has pressed the back arrow, remove the last character from the equation string */
            equation = equation.trim();
            equation = equation.substr(0, equation.length - 1);
        }

        /* update our state with the new version of the equation */
        this.setState({ equation });
    }

    render() {
        return (
            <div className="Calculator">
                <Screen equation={this.state.equation} result={this.state.result} />
                <Keypad onButtonPress={this.onButtonPress} />
            </div>
        );
    }
}

export default Calculator;