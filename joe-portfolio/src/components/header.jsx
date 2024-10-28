import React from 'react';

function Header() {
  return (
    <header className="header">
        <div className="logo_content">
                <img src="Hire-Front-End-Developer.jpg" alt="Joe Jury Sumayang II" width={350} height={350} />
            <h1>Hello there! <br />
                <span className="name">
                    I'm Joe Jury Sumayang II
                </span>
            </h1>
        </div>
        <div className="focus">
            <div className="G">
                <p>
                    Graphic Designer
                </p>
            </div>
            <div className="U">
                <p>
                    UI/UX Designer
                </p>
            </div>
            <div className="F">
                <p>
                    Front-end Developer
                </p>
            </div>
        </div>
    </header>
  );
}

export default Header;