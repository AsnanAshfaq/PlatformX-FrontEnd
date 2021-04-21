import React, { FunctionComponent } from "react";
import * as ReactBootStrap from "react-bootstrap";
import "../App.css";
import search from "../assets/Images/search.png";
import newsfeed from "../assets/Images/newsfeed.png";
import logout from "../assets/Images/logout.png";
import projects from "../assets/Images/projects.png";
import workshop from "../assets/Images/workshop.png";
import bell from "../assets/Images/bell.png";
import hackathon from "../assets/Images/hackathon.png";

const Header: FunctionComponent = () => {
  return (
    <div className="header">
      <ReactBootStrap.Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
      >
        <ReactBootStrap.Navbar.Brand>PlatformX</ReactBootStrap.Navbar.Brand>
        <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
          <ReactBootStrap.Nav className="searchbar">
            <ReactBootStrap.Form inline>
              <ReactBootStrap.FormControl type="text" placeholder="Search" />
              <ReactBootStrap.Navbar.Brand href="searchicon">
                <img src={search} height="20" width="20" alt="searchicon" />
              </ReactBootStrap.Navbar.Brand>
            </ReactBootStrap.Form>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav className="feedlogo">
            <ReactBootStrap.Navbar.Brand href="feed">
              <img src={newsfeed} width="35" height="35" alt="feedlogo" />
            </ReactBootStrap.Navbar.Brand>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav className="hackathonlogo">
            <ReactBootStrap.Navbar.Brand href="hackathons">
              <img src={hackathon} width="35" height="35" alt="hackathonlogo" />
            </ReactBootStrap.Navbar.Brand>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav className="projectslogo">
            <ReactBootStrap.Navbar.Brand href="projects">
              <img src={projects} width="35" height="35" alt="projectslogo" />
            </ReactBootStrap.Navbar.Brand>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav className="workshopslogo">
            <ReactBootStrap.Navbar.Brand href="workshops">
              <img src={workshop} width="35" height="35" alt="workshopslogo" />
            </ReactBootStrap.Navbar.Brand>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav className="belllogo">
            <ReactBootStrap.Navbar.Brand href="notification">
              <img src={bell} width="35" height="35" alt="notificationlogo" />
            </ReactBootStrap.Navbar.Brand>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav className="logoutlogo">
            <ReactBootStrap.Navbar.Brand href="logout">
              <img src={logout} width="35" height="35" alt="logoutlogo" />
            </ReactBootStrap.Navbar.Brand>
          </ReactBootStrap.Nav>

          <ReactBootStrap.Nav></ReactBootStrap.Nav>
        </ReactBootStrap.Navbar.Collapse>
      </ReactBootStrap.Navbar>
    </div>
  );
};

export default Header;
