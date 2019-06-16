import React, {Component} from 'react';
import './main.scss'
import Menu from "./Menu";
import MainContent from "./Content";
import Arrow from "./Arrow";

export default class main extends Component {
    render() {
        return (
            <section className="main-wrapper d-flex justify-content-between flex-column">
                <Menu/>
                <MainContent/>
                <Arrow/>
            </section>
        );
    }
}
