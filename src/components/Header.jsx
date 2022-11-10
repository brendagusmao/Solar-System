import React from 'react';
import '../styles/Header.css';

class Header extends React.Component {
  render() {
    return (
      <header className="backgroundHeader">
        <h1 className="maintitle">
          In space
          <h2 className="subtitleheader">Solar System</h2>
        </h1>
      </header>
    );
  }
}

export default Header;
