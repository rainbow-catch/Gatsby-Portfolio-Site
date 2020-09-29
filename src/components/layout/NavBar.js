import React from "react";

const NavBar = () => {
  
    return (
      <nav className="navbar bg-primary">
        <img src="./assets/logo.svg" className="App-logo" alt="logo" />
        {/* <h1>NavBar</h1> */}
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About Me</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/resume">Resume</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }


export default NavBar;
