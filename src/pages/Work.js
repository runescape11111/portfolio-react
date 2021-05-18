import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div>
        <main>
        <section id="past-work">
            <div className="title">
                <h3>
                    Work
                </h3>
            </div>
            <div className="container">
                <div className="work" id="first-child">
                    <figure>
                        <img src="/project-2.png" alt="Gift-A-Cate wishlist sharing app"/>
                        <div className="project">
                          <a href="https://powerful-lake-31769.herokuapp.com/" target="_blank" rel="noreferrer">
                            <h4>Wishlist Gifting App</h4>
                          </a>
                            <a href="https://github.com/DanCarrillo93/gift-a-cate" target="_blank" rel="noreferrer">
                              <h5 id="github1">GitHub Repo</h5>
                            </a>
                        </div>
                    </figure>
                </div>
                <div className="work">
                    <figure>
                        <img src="/dictionary.png" alt="Dictionary project"/>
                        <div className="project">
                            <a href="https://irvinek01.github.io/world-of-words/" target="_blank" rel="noreferrer">
                            <h4>Word Search App</h4>
                            </a>
                            <a href="https://github.com/irvinek01/project-1-secret-dictionary" target="_blank" rel="noreferrer">
                              <h5 id="github4">GitHub Repo</h5>
                            </a>
                        </div>
                    </figure>
                </div>
                <div className="work">
                    <figure>
                        <img src="/tech-blog.png" alt="Tech blog for posting and commenting"/>
                        <div className="project">
                          <a href="https://calm-badlands-67953.herokuapp.com/" target="_blank" rel="noreferrer">
                            <h4>Tech Blog</h4>
                          </a>
                            <a href="https://github.com/runescape11111/Tech-Blog" target="_blank" rel="noreferrer">
                              <h5 id="github5">GitHub Repo</h5>
                            </a>
                        </div>
                    </figure>
                </div>
                <div className="work" id="code-quiz">
                    <figure>
                        <img src="/code-quiz-question.png" alt="Code Quiz"/>
                        <div className="project">
                          <a href="https://runescape11111.github.io/Code-Quiz/" target="_blank" rel="noreferrer">
                            <h4>Code Quiz (not really)</h4>
                          </a>
                            <a href="https://github.com/runescape11111/Code-Quiz" target="_blank" rel="noreferrer">
                              <h5 id="github2">GitHub Repo</h5>
                            </a>
                        </div>
                    </figure>
                </div>
                <div className="work" id="weather-dashboard">
                    <figure>
                        <img src="/weather-dashboard.png" alt="weather dashboard"/>
                        <div className="project">
                          <a href="https://runescape11111.github.io/Weather-Dashboard/" target="_blank" rel="noreferrer">
                            <h4>Weather Dashboard</h4>                            
                          </a>
                            <a href="https://github.com/runescape11111/Weather-Dashboard" target="_blank" rel="noreferrer">
                              <h5 id="github3">Github Repo</h5>
                            </a>
                        </div>
                    </figure>
                </div>
            </div>
        </section>
        </main>
      </div>
    );
  }
}

export default Work;
