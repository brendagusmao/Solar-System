import React from 'react';
import PropTypes from 'prop-types';
import '../styles/Planets.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage, planetSun, planetMass, planetDiameter } = this.props;
    return (
      <div
        data-testid="planet-card"
        className="recomendation-card"
      >
        <span data-testid="planet-name" className="recommendationtitle">
          { planetName }
        </span>
        <img src={ planetImage } alt={ `Planeta ${planetName}` } className="imagecard" />

        <span data-testid="planet-subtitle" className="subtitle">
          Dados do planeta
          {' '}
          { planetName }
        </span>
        <span data-testid="planet-description" className="description">
          <b>Distância do sol:</b>
          {' '}
          { planetSun }
          {' '}
          <p />
          <b>Massa:</b>
          {' '}
          { planetMass }
          {' '}
          <p />
          <b>Diâmetro:</b>
          {' '}
          { planetDiameter }
          {' '}
          <p />
        </span>
      </div>
    );
  }
}
PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
  planetSun: PropTypes.string.isRequired,
  planetMass: PropTypes.string.isRequired,
  planetDiameter: PropTypes.string.isRequired,
};

export default PlanetCard;
