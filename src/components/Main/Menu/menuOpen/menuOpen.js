import React, {Component} from 'react';
import './menuOpen.scss'

export default class MenuOpen extends Component {
    state = {
        open: this.props.open ? this.props.open : false,
    };

    componentWillReceiveProps(nextProps) {
        if (nextProps.open !== this.state.open) {
            this.setState({open: nextProps.open});
        }
    }

    render() {
        const styles = {
            container: {
                position: 'fixed',
                top: 0,
                left: 0,
                height: this.state.open ? '100%' : 0,
                width: '100vw',
                display: 'flex',
                flexDirection: 'column',
                background: 'black',
                opacity: 0.96,
                color: '#fafafa',
                transition: 'height 0.7s ease',
                zIndex: 1,
            },
            menuList: {
                paddingTop: '3rem',
            }
        };
        return (
            <div style={styles.container}>
                {
                    this.state.open ?
                        <div style={styles.menuList}>
                            {this.props.children}
                        </div> : null
                }
            </div>
        )
    }
}
