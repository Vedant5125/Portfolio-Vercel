import React from 'react';
import './About.css'; // Link to CSS file
import MyImage from "../assets/MyImage1.png";

const About = () => {
  return (
    <section className="about-section">
      <h1 className="about-title">About Me</h1>
      <img src={MyImage} alt="devImage" />
      <p className="about-intro">
        Hi, I'm <strong>Vedant</strong> - a passionate Computer Engineering student with a strong interest in full-stack development and problem-solving.
      </p>
      <div className="about-content">
        <h2>What I Do</h2>
        <p>I enjoy designing and building projects that solve real-world problems. Some of my recent work includes:</p>
        <div style={{ height: '30px'}}></div>
        <ul>
          <li>🏦 <strong>Virtual Banking System</strong> - Java CRUD application for managing customer data.</li>
          <li>📚 <strong>Virtual Library</strong> - React Native app for accessing digital resources.</li>
          <li>⌨️ <strong>SpeedTypo</strong> - Typing speed test web app.</li>
        </ul>

        <h2>Skills</h2>
        <ul>💻 Programming Languages</ul>
        <li>JAVA</li>
        <li>PYTHON</li>
        <li>C</li>
        <ul>⚙️ Development Stack</ul>
        <li>MERN ( MongoDB, Express.js, React.js, Node.js )</li>
        <li>Frontend: HTML, CSS</li>
        <li>Backend: Node.js, Express.js, Firebase, MySQL</li>
        <h2>🎯 Goal</h2>
        <p>To become a full-stack developer and build meaningful software solutions.</p>
      </div>
    </section>
  );
};

export default About;
