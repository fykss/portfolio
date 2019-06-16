import React, {Component} from 'react';
import './mainContent.scss'
import {Link} from "react-scroll/modules";

export default class MainContent extends Component {
    render() {
        return (
            <div className="component-main d-flex justify-content-center align-items-center flex-column">
                <h1>VLADYSLAV LIETUN</h1>
                <p>I'm a Web Developer living in Kiev. Computers and technology were always a passion for me, but I
                    found myself in web development, so I decided to follow this path professionally, always giving the
                    best of myself.
                </p>

                <Link
                    to='About'
                    smooth={true}
                    duration={800}
                    isDynamic={true}
                    onClick={this.props.onClick}
                >
                    <button className='btn btn-lg'>About</button>
                </Link>
            </div>
        );
    }
}