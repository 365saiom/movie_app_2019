import React from "react";

function About(props) {
  console.log(props);
  return (
    <div className="about_container">
      <span>About this page : I built it because I love movie.</span>
      <span>- George Orwell, 1984</span>
    </div>
  );
}

export default About;
