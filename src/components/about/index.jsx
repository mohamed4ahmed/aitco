import React from "react";
import { SiGooglemaps } from "react-icons/si";
import "./style.css";

// const About = ({ languages, socials, tools }) => {
const About = ({ socials }) => {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-top">
          <h4>More about AITCO</h4>
          {/* <p>
            <span role="img" aria-label="from">
              🌏
            </span>{" "}
            From: Elmahala-Elkoubra city , Gharbia , Egypt
          </p> */}
          <p>
            <span role="img" aria-label="live">
              🌏 LOCATION 
            </span>{" "} 
            
            <a
              href="https://www.google.com/maps/place/alphaOne+-+Commercial+Building+Technology+Company/@24.6824631,46.7879866,17z/data=!3m1!4b1!4m6!3m5!1s0x3e2f07fb1f476e0f:0x2760615aae82e1c3!8m2!3d24.6824631!4d46.7879866!16s%2Fg%2F11w2_mwzdr?entry=ttu&g_ep=EgoyMDI1MDMwNC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              >
                <SiGooglemaps /> Get Directions
              </a> Saudi Arabia, Riyadh, Al-Jazirah Dist
          </p>

           <p>
            <span role="img" aria-label="email">
              📨EMAIL📨
            </span>{" "}
              <a
               rel="noopener noreferrer"
               target="__blank"
               href="mailto:engsalah@aitcosa.com"
              >
               engsalah@aitcosa.com
              </a>
          </p>
          
          <p>
            <span role="img" aria-label="education">
            🎓Education🎓 :
            </span>{" "}
             Mansoura University
            Bachelor's degree, Civil Engineering Bachelor's degree, Civil Engineering
            January 1994 - September 1999
          </p>

          <p>
            <span role="img" aria-label="experience">
              📕EXPERIENCE📕
            </span>{" "}
             As the CEO of AITCO a leading contracting company specializing in steel structures,
             I bring over two decades of extensive experience in the field of civil engineering.
             Throughout my career, I have been dedicated to delivering excellence in construction projects.
          </p>
          
          
        </div>

        <hr />

        <div className="about-left-bot">
          <h3>Find AITCO on social media </h3>
          <div className="about-left-bot__socials-icons">
            {socials.map((social) => {
              return (
                <a
                  key={social.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.link}
                >
                  <img
                    align="left"
                    alt={social.alt}
                    width="50px"
                    src={social.src}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className="about-right">
        <h4>Top Expertise</h4>
        <p> 
          interested in Metal Decoration, We have experience in lifecycle of
          Metal Deccoration:{" "}
          <a target="__blank" rel="noopener noreferrer" href="/resume.pdf">
            Download Résumé
          </a>{" "}
        </p>
        <div className="about-right__skills">
          <div className="about-right__skills-languages">
            <p> Experience : </p>
            {languages.map((language) => {
              return (
                <img
                  key={language.id}
                  align="left"
                  alt={language.alt}
                  width="26px"
                  src={language.src}
                />
              );
            })}
          </div>
          <div className="about-right__skills-tools">
            <p>Tools : </p>
            {tools.map((tool) => {
              return (
                <img
                  key={tool.id}
                  align="left"
                  alt={tool.alt}
                  width="26px"
                  src={tool.src}
                />
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
