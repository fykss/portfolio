import React, {Component} from 'react';
import './event.scss'

export default class Event extends Component {

    render() {

        const style = {
            dot: {
                backgroundColor: '#ccc'
            }
        };

        const item = this.props.content.map((item, index) => {
            return (
                <article className='event' key={index} >
                    <span className='dot' style={item.month ? null : style.dot}/>
                    <span className='event-month'>{item.month}</span>
                    <a href={item.url} className='event-title'>{item.title}</a>
                </article>
            )
        });

        return (
            <React.Fragment>
                <div className='event-wrapper row'>
                    <div className='event-year d-flex justify-content-end col-4'>
                        <h3>{this.props.year}</h3>
                    </div>
                    <div className='event-content col-8'>
                        {item}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}