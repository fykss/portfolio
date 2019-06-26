import React, {Component} from 'react';
import './loader.scss'

export default class Loader extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="top-left"/>
                <div className="bottom-left"/>
                <div className="top-right"/>
                <div className="bottom-right"/>
            </React.Fragment>
        );
    }
}