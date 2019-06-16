import React, {Component} from 'react';
import './menu.scss'

import MenuItem from "./menuItem";
import MenuButton from "./menuButton";
import MenuOpen from "./menuOpen";

export default class Menu extends Component {
    state = {
        menuOpen: false
    };

    handleMenuClick() {
        this.setState({
            menuOpen: !this.state.menuOpen,
        });
    }

    handleLinkClick() {
        this.setState({
            menuOpen: false,
        });
    }

    render() {
        const menu = ['About', 'Timeline', 'Skills', 'Work', 'Contact Me'];
        const menuItems = menu.map((val, index) => {
            return (
                <MenuItem
                    key={index}
                    delay={`${index * 0.1}s`}
                    onClick={() => {
                        this.handleLinkClick();
                    }}>{val}</MenuItem>)
        });

        return (
            <React.Fragment>
                <MenuButton open={this.state.menuOpen} onClick={() => this.handleMenuClick()}/>
                <div className='is-empty-elem'/>
                <MenuOpen open={this.state.menuOpen}>
                    {menuItems}
                </MenuOpen>
            </React.Fragment>
        )
    }
}
