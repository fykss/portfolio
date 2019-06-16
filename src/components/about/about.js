import React, {Component} from 'react';
import './about.scss';
import photo from './img/photo.png';

export default class About extends Component {
    render() {
        return (
            <section className="about" id='About'>
                <img src={photo} alt='my-photo'/>
                <div className="about-description row">
                    <div className="about-description-item col-md-4 mb-5">
                        <h3>I am hardworking</h3>
                        <p>I believe that hard work is the path to success. That is why I make every day efforts to
                            become one step higher. I never give up, even when difficult times come.
                            <br/>
                            <i>"It takes 20 years to become an overnight success” - Eddie Cantor</i>
                        </p>
                    </div>
                    <div className="about-description-item col-md-4 mb-5">
                        <h3>I am purposeful</h3>
                        <p>Every person should have a goal in life, should strive for this goal and not give up. My
                            long run goal is to contribute to products that solve real-world problems. I strive to
                            become a part organizations and apply all your efforts and skills to achieve a positive
                            result.
                        </p>
                    </div>
                    <div className="about-description-item col-md-4 mb-5">
                        <h3>I am talented</h3>
                        <p>Hard work is a talent. Effort is driven by character traits like how ambitious, driven,
                            self-disciplined, or focused you are. So it could be argued that the ability to give great
                            effort is in fact a talent.
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}