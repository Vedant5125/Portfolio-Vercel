import React from 'react';
import './Project.css';
import VBSimg from "../assets/VBSimg.png"
import VLimg from "../assets/VLimg.jpeg"
import PLSimg from "../assets/PLSimg.png"
import STimg from "../assets/STimg.png"

const Project = () => {
  const projects = [
    {
      title: 'Virtual Library',
      desc: 'An app that provides a centralized digital platform for seamless access to resources anytime, anywhere.',
      img: VLimg,
      color: '#f0e9ff',
      link: 'https://github.com/Vedant5125/Virtual-Library',
    },
    {
      title: 'Laundary Management System',
      desc: 'A Web-based solution to manage laundry orders, track status efficiently.',
      img: PLSimg,
      color: '#fff4d8',
      link: 'https://github.com/Vedant5125/Laundry-Management-System',
    },
    {
      title: 'Virtual Banking System',
      desc: 'A java project to perform essential CRUD operations for managing customer banking data',
      img: VBSimg,
      color: '#ffe3e3',
      link: 'https://github.com/Vedant5125/Virtual-Banking-System',
    },
    {
      title: 'SpeedTypo',
      desc: 'A website that can calculate your typing speed',
      img: STimg,
      color: '#ffe3e3',
      link: 'https://github.com/Vedant5125/SpeedTypo',
    },
  ];

  return (
    <div className="project-container">
      {projects.map((proj, index) => (
        <div className="card" key={index} style={{ backgroundColor: proj.color }}>
          <img src={proj.img} alt={proj.title} className="card-img" />
          <h2>{proj.title}</h2>
          <p>{proj.desc}</p>
          <a href={proj.link} target="_blank" rel="noopener noreferrer" className="project-button">
            Check it out <span className="arrow">›</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;
