
import React, { Component } from 'react';
import './Keypad.css'
import KeypadRow from '../KeypadRow/KeypadRow';
import Button from '../Button/Button';

class Keypad extends Component {
    render() {
        return (
            <div className='Keypad'>
                {/* Row 1 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='primary'>C</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>&larr;</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>%</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>/</Button>
                </KeypadRow>

                {/* Row 2 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>7</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>8</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>9</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>*</Button>
                </KeypadRow>

                {/* Row 3 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>4</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>5</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>6</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>-</Button>
                </KeypadRow>

                {/* Row 4 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>1</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>2</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>3</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator'>+</Button>
                </KeypadRow>
                
                {/* Row 5 */}
                <KeypadRow>
                    <Button onButtonPress={this.props.onButtonPress} type='nums'>0</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='operator-period'>.</Button>
                    <Button onButtonPress={this.props.onButtonPress} type='equalButton'>=</Button>
                </KeypadRow>
            </div>
        );
    }
}

export default Keypad;