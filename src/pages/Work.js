import React from "react";
import projects from "../utils/projects";
import Card from "../components/Card";

function Work() {
    return (
        <main>
        <section id="past-work">
            <div className="title">
                <h3>
                    Work
                </h3>
            </div>
            <div className="container">
                {projects.map(project => {
                  return(
                    <Card key={project.id} project={project} />
                  )
                })}
            </div>
        </section>
        </main>
    );
}

export default Work;
