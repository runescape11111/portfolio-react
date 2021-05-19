import React from "react";

function Card(props) {
    const project = props.project;
    return (
        <div className="work" id={project.id===1 ? "first-child" : undefined}>
            <figure>
                <img src={project.src} alt={project.alt}/>
                <div className="project">
                    <a href={project.deployed} target="_blank" rel="noreferrer">
                        <h4>{project.name}</h4>
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer">
                        <h5 id="github1">GitHub Repo</h5>
                    </a>
                </div>
            </figure>
        </div>
    )
}

export default Card;