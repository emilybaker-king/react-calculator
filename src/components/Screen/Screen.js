
import React, { Component } from 'react';
import './Screen.css';
import RescultsScreen from '../ResultsScreen/ResultsScreen'

/* component that holds the results screen and calculation screen */
class Screen extends Component {
    render() {
        return (
            <div className="Screen">
                <RescultsScreen>0</RescultsScreen>
            </div>
        );
    }
}

export default Screen;