import React, {Component} from 'react';
import './timeline.scss'
import Event from "./event";

export default class Timeline extends Component {
    render() {

        const events = [
            {
                eventYear: {
                    year: '2019',
                    content: [
                        {
                            month: '',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'may',
                            title: 'Repudiandae temporibus, voluptatum? Architecto ducimus facere iure',
                            url: 'http://www.apple.com'
                        }
                    ]
                }
            },
            {
                eventYear: {
                    year: '2018',
                    content: [
                        {
                            month: '',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'dec',
                            title: 'Squarespace celebrates its 15th anniversary.',
                            url: ''
                        },
                        {
                            month: 'mar',
                            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugiat itaque odit ',
                            url: ''
                        }
                    ]
                }
            },
            {
                eventYear: {
                    year: '2017',
                    content: [
                        {
                            month: '',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'dec',
                            title: 'Squarespace celebrates its 15th anniversary.',
                            url: ''
                        },
                        {
                            month: 'mar',
                            title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A fugiat itaque odit ',
                            url: ''
                        }
                    ]
                }
            },
            {
                eventYear: {
                    year: '2013',
                    content: [
                        {
                            month: '',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'sep',
                            title: 'Hello, adult life. Relocate to Kiev, Ukraine',
                            url: ''
                        },
                        {
                            month: 'aug',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'mar',
                            title: 'First computer. Counter strike 1.6, NFS, Generals',
                            url: ''
                        },
                    ]
                }
            },
            {
                eventYear: {
                    year: '2012',
                    content: [
                        {
                            month: '',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'sep',
                            title: 'Immersion in education, training for ZNO',
                            url: ''
                        },
                    ]
                }
            },
            {
                eventYear: {
                    year: '2007',
                    content: [
                        {
                            month: '',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'sep',
                            title: 'Visit to the first math olympiad',
                            url: ''
                        },
                        {
                            month: 'jun',
                            title: 'Yard football, the dream of becoming a professional football player',
                            url: ''
                        },
                        {
                            month: 'mar',
                            title: 'First computer. Counter strike 1.6, NFS, Generals',
                            url: ''
                        },
                    ]
                }
            },
            {
                eventYear: {
                    year: '2002',
                    content: [
                        {
                            month: '',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'aug',
                            title: 'Relocate to Lugansk, Ukraine and went to the school',
                            url: ''
                        }
                    ]
                }
            },
            {
                eventYear: {
                    year: '1995',
                    content: [
                        {
                            month: '',
                            title: '',
                            url: ''
                        },
                        {
                            month: 'mar',
                            title: 'Hello, World! I was born in Sovetsk, Russia',
                            url: ''
                        }
                    ]
                }
            }

        ];

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