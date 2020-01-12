import React, {Component} from 'react';
import './skill.scss'

export default class Skill extends Component {
    render() {
        const { type, level } = this.props;

        return (
            <div className='skill'>
                <span className='skill-title'>{type}</span>
                <span className='skill-percent'>{level}%</span>
                <div className='skill-line' style={{width: `${level}%`}}/>
            </div>
        )
    }
}