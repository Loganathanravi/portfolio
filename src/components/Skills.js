import React from 'react';
import { FaHtml5 } from 'react-icons/fa';
import { DiCss3Full } from 'react-icons/di';
import { BiLogoJavascript } from 'react-icons/bi';
import { FcTimeline } from 'react-icons/fc';
import { FaReact } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

function Skills() {
  return (
    <div className='Skills'>
      <ul>
        <FaHtml5 style={{ marginRight: '0.5em',color:"orange" }} />
        <span>Html</span>
      </ul>
      <ul>
        <DiCss3Full style={{ marginRight: '0.5em',color:"blue" }} />
        <span>Css</span>
      </ul>
      <ul>
        <BiLogoJavascript style={{ marginRight: '0.5em',color:"yellow" }} />
        <span>Java Script</span>
      </ul>
     
      <ul>
        <FaReact style={{ marginRight: '0.5em',color:"blue" }} />
        <span>React Js</span>
      </ul>
      <ul>
        <FcTimeline style={{ marginRight: '0.5em' }} />
        <span>Material Ui</span>
      </ul>
      <ul>
        <BsGithub style={{ marginRight: '0.5em',color:"black" }} />
        <span>Git-Hub</span>
      </ul>
    </div>
  );
}

export default Skills;


