import React, {Component} from 'react';
import {Link} from 'react-scroll';
import './menuItem.scss';

export default class MenuItem extends Component {
    state = {
        hover: false
    };

    render() {
        const styles = {
            container: {
                opacity: 0,
                animation: '1s appear forwards',
                animationDelay: this.props.delay,
            },
        };
        return (
            <div style={styles.container}>
                <div className='menu-item'>
                    <Link
                        to={this.props.children}
                        smooth={true}
                        duration={800}
                        isDynamic={true}
                        onClick={this.props.onClick}
                    >
                        {this.props.children}
                    </Link>
                </div>
                <div className='line'/>
            </div>
        )
    }
}