import React, {Component} from "react";
import {photos} from "./WorkData";
import WorkItem from "./WorkItem";
import './works.scss'

export default class Works extends Component {
    render() {
        const workItem = photos.map((photo, index) => {
            return (
                <WorkItem
                    key={index}
                    src={photo.src}
                    url={photo.url}
                    description={photo.description}
                />
            )
        });

        return (
            <section className='works-section' id='Works'>
                <h2>works</h2>
                <div className="work-wrapper row">
                    {workItem}
                </div>
            </section>
        )
    }
}