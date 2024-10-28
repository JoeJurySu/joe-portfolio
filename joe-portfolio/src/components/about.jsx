import React from 'react';

function About() {
  return (
    <section className="about">
        <div className="profile">
            <img src="profile.jpg" alt="Joe Jury Sumayang II" width={350} height={360} />
        </div>
        <div className="about-content">
            <h2>About Me</h2>
            <p> <br />
                I'm a passionate and skilled graphic designer,<br /> 
                UI/UX designer, and front-end developer with a strong <br/ >
                focus on creating visually appealing and user-friendly, <br />
                designs.<br /><br/>
            </p>
            <p>
                I have a keen eye for detail and a love for crafting <br />
                innovative solutions that exceed client expectations.
            </p>    
        </div>  
    </section>
  );
}

export default About;