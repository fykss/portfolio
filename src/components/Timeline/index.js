import React, {Component} from 'react';
import './timeline.scss'
import Event from './Event';
import events from './EventsData'

export default class Timeline extends Component {
    render() {
        const eventItem = events.map((event, index) => {
            return (
                <Event
                    key={index}
                    year={event.eventYear.year}
                    content={event.eventYear.content.map(event => {
                        return event
                    })}
                />
            )
        });

        return (
            <section className='timeline-overview' id='Timeline'>
                {eventItem}
            </section>
        );
    }
}