import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import '../styles/Planets.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="backgroundplanets">
        <Title headline="Planetas" className="title" />
        <section className="carousel">
          {/* <ScrollingCarousel
            // show={ 3.4 }
            // slide={ 2 }
            // swiping
            // leftArrow={ <div className="arrowleft">. </div> }
            // rightArrow={ <div className="arrow">. </div> }
            // responsive={ false }
            // swipeOn
            rightIcon={ <div className="arrow"> next </div> }
            leftIcon
          > */}
          {Planets.map((element) => (
            <PlanetCard
              key={ element.name }
              planetName={ element.name }
              planetImage={ element.image }
              planetSun={ element.sun }
              planetMass={ element.mass }
              planetDiameter={ element.diameter }
            />
          )) }
          {/* </ScrollingCarousel> */}
        </section>
      </div>
    );
  }
}

export default SolarSystem;
