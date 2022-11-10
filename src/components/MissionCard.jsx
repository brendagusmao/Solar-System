import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="missionscard">
        <span data-testid="mission-name" className="missiontitle">{name}</span>
        <div className="description">
          <span data-testid="mission-year">
            <b>Year: </b>
            {year}
          </span>

          <p />
          <span data-testid="mission-country">
            <b>Contry: </b>
            {country}

          </span>

          <p />
          <span data-testid="mission-destination">
            <b>Destination: </b>
            {destination}

          </span>

          <p />
        </div>
      </div>
    );
  }
}
MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};

export default MissionCard;
