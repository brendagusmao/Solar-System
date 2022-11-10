import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../styles/Missions.css';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="backgroundMissions">
        <Title headline="Missões" className="title" />
        <div
          className="mainMissions"
        >
          {missions.map((mission) => (
            <MissionCard
              key={ mission.name }
              { ...mission }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
