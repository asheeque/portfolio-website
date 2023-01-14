import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1+ Years Working</small>
            </article>

            {/* <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Education</h5>
              <small>MS in Computer Science</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Education</h5>
              <small>B.Tech in Computer engineering</small>
            </article>
          </div>

          <p>
            I am a computer science graduate with 1 year of experience in the
            software development industry. I am passionate about solving new
            challenges in software development as well as in machine learning. I
            am always looking for new opportunities to expand my knowledge and
            skills. I am a strong team player, with a simple approach to
            problem-solving.
          </p>
          <p>
            I am currently seeking new opportunities in the software engineering
            and data science field. I am open to remote work or relocating. I am
            looking for a company where I can use my skills and experience to
            make a meaningful impact and continue to grow professionally. In
            addition to my professional experience, I hold a master in science
            in computer science from University at Buffalo.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
