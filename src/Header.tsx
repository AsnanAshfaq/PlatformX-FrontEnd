import React from 'react';
import * as ReactBootStrap from "react-bootstrap";
import  './App.css'

 function Header() {
  return (
    <div className="header">
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStrap.Navbar.Brand>PlatformX</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">

    <ReactBootStrap.Nav className ="searchbar">
      <ReactBootStrap.Form inline>
        <ReactBootStrap.FormControl type="text" placeholder="Search"/>
         <ReactBootStrap.Navbar.Brand href="searchicon">
          <img 
          src="/Images/search.png"
          height="20"
          width="20" 
          alt="searchicon"/> 
          </ReactBootStrap.Navbar.Brand> 
      </ReactBootStrap.Form>
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav className="feedlogo">   
    <ReactBootStrap.Navbar.Brand href="feed">
      <img
      src="/Images/newsfeed.png"
      width="35"
      height='35'
      alt="feedlogo"
      />
    </ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Nav>


    <ReactBootStrap.Nav className="hackathonlogo">
     <ReactBootStrap.Navbar.Brand href="hackathons">
        <img
      src="/Images/hackathon.png"
      width="35"
      height='35'
      alt="hackathonlogo"
      />
      </ReactBootStrap.Navbar.Brand> 
     </ReactBootStrap.Nav>


    <ReactBootStrap.Nav className="projectslogo">
      <ReactBootStrap.Navbar.Brand href="projects">
        <img
      src="/Images/projects.png"
      width="35"
      height='35'
      alt="projectslogo"
      />
      </ReactBootStrap.Navbar.Brand>
      </ReactBootStrap.Nav>


    <ReactBootStrap.Nav className="workshopslogo">
      <ReactBootStrap.Navbar.Brand href="workshops">
        <img
      src="/Images/workshop.png"
      width="35"
      height='35'
      alt="workshopslogo"
      />
      </ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav className="belllogo">
      <ReactBootStrap.Navbar.Brand href="notification">
        <img
      src="/Images/bell.png"
      width="35"
      height='35'
      alt="notificationlogo"
      />
      </ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav className="logoutlogo">
      <ReactBootStrap.Navbar.Brand href="logout">
        <img
      src="/Images/logout.png"
      width="35"
      height='35'
      alt="logoutlogo"
      />
      </ReactBootStrap.Navbar.Brand>
    </ReactBootStrap.Nav>

    <ReactBootStrap.Nav>
    </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Navbar>
      
    </div>
  );
}

export default Header;