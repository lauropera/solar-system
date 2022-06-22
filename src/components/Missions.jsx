import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    return (
      <div data-testid="missions" className="missions-container">
        <Title headline="Missões" />
        <div className="missions">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={name}
              name={name}
              year={year}
              country={country}
              destination={destination}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
