import React, { Component } from 'react';
import './skillBar.scss';
import Skill from './Skill';
import skillsBack from './SkillsData/Back';
import skillsFront from './SkillsData/Front';
import skillsTech from './SkillsData/Tech';

export default class Skills extends Component {
  render() {
    const skillBack = skillsBack.map((skill, index) => {
      return <Skill key={index} type={skill.type} level={skill.level} />;
    });
    const skillFront = skillsFront.map((skill, index) => {
      return <Skill key={index} type={skill.type} level={skill.level} />;
    });
    const skillTech = skillsTech.map((skill, index) => {
      return <Skill key={index} type={skill.type} level={skill.level} />;
    });

    return (
      <section className='skill-bar row' id='Skills'>
        <div className='skill-bar-data col-12 col-md-4'>
          <h2>back end</h2>
          {skillBack}
        </div>
        <div className='skill-bar-data col-12 col-md-4'>
          <h2>technologies</h2>
          {skillTech}
        </div>
        <div className='skill-bar-data col-12 col-md-4 '>
          <h2>front end</h2>
          {skillFront}
        </div>
      </section>
    );
  }
}
