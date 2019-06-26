import React, {Component} from 'react';
import './menuButton.scss'

export default class MenuButton extends Component {
    state = {
        open: this.props.open ? this.props.open : false,
        color: this.props.color ? this.props.color : 'black',
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({open: nextProps.open});
        }
    }

    handleClick() {
        this.setState({
            open: !this.state.open,
        });
    }

    render() {
        const styles = {
            buttonWrapper: {
                background: this.state.open ? 'inherit' : 'white',
                transitionDelay: this.state.open ? null : '1s'
            },
            line: {
                height: '2px',
                width: '20px',
                background: this.state.open ? 'white' : 'black',
                transition: 'all 0.7s ease',
            },
            lineTop: {
                transform: this.state.open ? 'rotate(45deg)' : 'none',
                transformOrigin: 'top left',
                marginBottom: '5px',
            },
            lineMiddle: {
                opacity: this.state.open ? 0 : 1,
                transform: this.state.open ? 'translateX(-16px)' : 'none',
            },
            lineBottom: {
                transform: this.state.open ? 'translateX(-1px) rotate(-45deg)' : 'none',
                transformOrigin: 'top left',
                marginTop: '5px',
            },
        };
        return (
            <div className='button-wrapper d-flex justify-content-center fixed-top' style={{...styles.buttonWrapper}}>
                <div className='menu-button'
                     onClick={this.props.onClick ? this.props.onClick :
                         () => {
                             this.handleClick();
                         }}>
                    <div style={{...styles.line, ...styles.lineTop}}/>
                    <div style={{...styles.line, ...styles.lineMiddle}}/>
                    <div style={{...styles.line, ...styles.lineBottom}}/>
                </div>
            </div>
        )
    }
}
