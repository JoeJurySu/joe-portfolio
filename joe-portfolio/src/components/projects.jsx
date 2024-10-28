import React from 'react';

function Projects() {
  return (
    <section className="projects">
        <h2>Projects</h2>
            <ul>
                <div className="project-box">
                    <h3>Smart Home Dashboard</h3>
                        <p> <br />
                            Designed a visually appealing and intuitive 
                            dashboard for a smart home system, allowing users 
                            to easily control and monitor various devices.
                        </p> <br />
                    <button>
                        <a href="#https://project1-link.com">
                            View Project
                        </a>   
                    </button>
                </div>

                <div className="project-box">
                    <h3>Brand Identity for a Tech Startup</h3>
                        <p> <br />
                            Developed a cohesive brand identity, including a logo, 
                            color palette, and typography, for a 
                            new technology startup.
                        </p> <br />
                    <button>
                        <a href="#https://project1-link.com">
                            View Project
                        </a>   
                    </button>
                </div>

                <div className="project-box">
                    <h3>Interactive Data Visualization Tool</h3>
                        <p> <br />
                        Developed a web-based tool that visualizes complex data 
                        sets using interactive charts and graphs, providing 
                        valuable insights for users.
                        </p> <br />
                    <button>
                        <a href="#https://project1-link.com">
                            View Project
                        </a>   
                    </button>
                </div>
            </ul>
    </section>
  );
}

export default Projects;