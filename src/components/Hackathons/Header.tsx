import React, {FunctionComponent} from 'react';
import '../../App.css';
import 'react-tippy/dist/tippy.css';
import {Tooltip} from 'react-tippy';
import HomeIcon from '@material-ui/icons/Home';
import EventIcon from '@material-ui/icons/Event';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SearchIcon from '@material-ui/icons/Search';
import RateReviewIcon from '@material-ui/icons/RateReview';
import '../../style/Header.css';

const SearchComponent: FunctionComponent = () => {
  return (
    <div className="searchbar">
      <input className="search_input" type="text" placeholder="Search" />
      <a className="search_icon" href="/">
        <Tooltip title="search">
          <SearchIcon />
        </Tooltip>
        <i className="fas fa-search" />
      </a>
    </div>
  );
};

type props = {
  className: string;
  title: string;
};

const HeaderIcon: FunctionComponent<props> = ({className, title, children}) => {
  return (
    <div className={className}>
      <Tooltip title={title}>{children}</Tooltip>
    </div>
  );
};

const Header: FunctionComponent = () => {
  return (
    <nav className="navbar navbar-expand sticky-top navbar-light bg-dark">
      <p className="navbar-brand">PlatformX</p>
      <div className="d-flex justify-content-center mr-5">
        <HeaderIcon className="homeicon col-sm" title="Home">
          <HomeIcon fontSize="large" />
        </HeaderIcon>

        <HeaderIcon className="hackathonicon col-sm" title="Hackathon">
          <AssignmentIcon fontSize="large" />
        </HeaderIcon>

        <HeaderIcon className="projectsicon col-sm" title="Projects">
          <RateReviewIcon fontSize="large" />
        </HeaderIcon>

        <HeaderIcon className="workshopsicon col-sm" title="Workshops">
          <EventIcon fontSize="large" />
        </HeaderIcon>
      </div>
      <div className="nav navbar-right">
        <SearchComponent />
      </div>
    </nav>
  );
};

export default Header;
