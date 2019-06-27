import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './app.scss'

import Loader from '../Loader'
import Main from '../Main'
import About from '../About';
import Timeline from '../Timeline';
import Skills from '../SkillBar';
import Work from "../Works";
import Contact from "../Contact";

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

const content =
    <React.Fragment>
        <Main/>
        <About/>
        <Timeline/>
        <Skills/>
        <Work/>
        <Contact/>
    </React.Fragment>;


