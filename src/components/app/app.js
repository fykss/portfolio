import React, {Component} from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import './app.scss'

import Loader from '../loader'
import Main from '../main'
import About from "../about";
import Timeline from "../timeline";

export default class app extends Component {
    state = {
        loading: true,
    };

    onLoaded() {
        setTimeout(() => {
            this.setState({
                loading: false,
            });
        }, 1500)
    }

    render() {
        const {loading} = this.state;

        const content =
            <React.Fragment>
                <Main/>
                <About/>
                <Timeline/>
            </React.Fragment>;

        const loadPage = loading ? <Loader onLoaded={this.onLoaded()}/> : null;
        const contentLoad = !loading ? content : null;

        return (
            <React.Fragment>

                {loadPage}

                <ReactCSSTransitionGroup
                    transitionName="example"
                    transitionEnterTimeout={1500}
                    transitionLeaveTimeout={300}>

                    {contentLoad}

                </ReactCSSTransitionGroup>

            </React.Fragment>
        );
    }
}


