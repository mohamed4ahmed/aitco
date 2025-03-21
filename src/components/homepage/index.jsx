import React from "react";
import "./style.css";
import Intro from "../intro";
import About from "../about";
// import Maps from "../maps";
import Posts from "../posts";
// import Contact from "../contact";
import Greeting from "../greeting";

// const Homepage = ({ languages, socials, tools, posts }) => {
const Homepage = ({ socials, posts }) => {
  return (
    <React.Fragment>
      <section className="s1">
        <div className="main-container">
          {/* <Greeting /> */}
          <Intro />
        </div>
      </section>

      <section className="s2">
        <div className="main-container">
          <About socials={socials} />
          {/* <About socials={socials} languages={languages} tools={tools} /> */}
        </div>
      </section>

      <section className="s1">
        <div className="main-container">
          <Posts posts={posts} />
        </div>
      </section>

      {/* <Maps /> */}

      <section className="s2">
        <div className="main-container">
          <Greeting />
        </div>
      </section>
    </React.Fragment>
  );
};

export default Homepage;
