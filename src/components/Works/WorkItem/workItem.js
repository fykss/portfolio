import React, {Component} from 'react';
import './workItem.scss'

export default class WorkItem extends Component {
    render() {
        const {src, url, description} = this.props;

        return (
            <div className="work col-12 col-md-3">
                <img className='work-wrapper-img' src={src} alt=""/>
                <a className='work-link d-flex justify-content-center align-items-center'
                   href={url}>
                    <span className='description'>
                        {description}
                    </span>
                </a>
            </div>
        )
    }
}
