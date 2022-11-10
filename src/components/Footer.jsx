import React from 'react';
import '../styles/Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        Projeto e design - Brenda Gusmão
        <span> FEITO COM REACT</span>
        <span>
          {' '}
          Projeto desenvolvido pela
          {' '}
          <b>trybe</b>
        </span>
        <span>
          <a href=""> code in github</a>
        </span>
      </footer>
    );
  }
}

export default Footer;
