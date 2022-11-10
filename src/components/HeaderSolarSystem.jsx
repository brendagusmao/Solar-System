import React from 'react';
import Title from './Title';
import '../styles/HeaderSolar.css';

class HeaderSolarSystem extends React.Component {
  render() {
    return (
      <div className="backgroundsolar">
        <Title headline="Solar System" className="title" />
        <div className="solar" />
      </div>
    );
  }
}

export default HeaderSolarSystem;
