import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="backgroundHeader">
        <h1 className="maintitle">
          In space
          <span className="subtitleheader">Solar System</span>
        </h1>
      </header>
    );
  }
}

export default Header;
