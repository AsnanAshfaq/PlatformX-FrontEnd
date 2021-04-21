import React, {FunctionComponent} from 'react';
import '../App.css';
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';

const Header: FunctionComponent = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div className="navbar-header">
          <h3 className="projectname">PlatformX</h3>
        </div>

        <div className="icons row">
          <div className="homeicon col-sm">
            <Tooltip title="Home">
              <HomeIcon fontSize="large"></HomeIcon>
            </Tooltip>
          </div>

          <div className="hackathonicon col-sm">
            <Tooltip title="Hackathon">
              <AssignmentIcon fontSize="large"></AssignmentIcon>
            </Tooltip>
          </div>

          <div className="projectsicon col-sm">
            <Tooltip title="Projects">
              <RateReviewIcon fontSize="large"></RateReviewIcon>
            </Tooltip>
          </div>

          <div className="workshopsicon col-sm">
            <Tooltip title="Workshops">
              <EventIcon fontSize="large"></EventIcon>
            </Tooltip>
          </div>
        </div>

        <div className="nav navbar-right">
          <div className="container h-100">
            <div className="d-flex justify-content-center h-100">
              <div className="searchbar">
                <input
                  className="search_input"
                  type="text"
                  placeholder="Search"
                />
                <a className="search_icon">
                  <Tooltip title="search">
                    <SearchIcon></SearchIcon>
                  </Tooltip>
                  <i className="fas fa-search"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
