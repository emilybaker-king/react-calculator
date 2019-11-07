
import React, { Component } from 'react';
import './Screen.css';
import RescultsScreen from '../ResultsScreen/ResultsScreen'
import ComputationScreen from '../ComputationScreen/ComputationScreen';

/* component that holds the results screen and calculation screen */
class Screen extends Component {
    render() {
        return (
            <div className="Screen">
                <RescultsScreen>0</RescultsScreen>
                <ComputationScreen>2+3</ComputationScreen>
            </div>
        );
    }
}

export default Screen;