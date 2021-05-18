import React from "react";

function About() {
  return (
    <div>
    <figure className="top-pic">
        <img src="/oreo.jpg" alt="A placeholder of my cat"/>
        <img src="/professional pic 2.jpg" alt="Personal professional shot" className="bio-pic"/>
        <h2>In case you're wondering, BIG cat lover!</h2>
    </figure>
    <main>
            <article id="about">
            <div className="title">
                <h3>
                    About Me
                </h3>
            </div>
            <div className="bio">
                <p>
                    Born and raised in Shanghai, China, attended Monash University in Melbourne, Australia for undergrad study majoring in mechanical and aerospace engineering.
                </p>
            </div>
        </article>
    </main>
    </div>
  );
}

export default About;
