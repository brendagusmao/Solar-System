import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import Title from './Title';
import PlanetCard from './PlanetCard';
import Planets from '../data/planets';
import '../styles/Planets.css';
import 'react-alice-carousel/lib/alice-carousel.css';

class SolarSystem extends React.Component {
  render() {
    const responsive = {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 3,
      },
    };

    return (
      <div data-testid="solar-system" className="backgroundplanets">
        <Title headline="Planetas" className="title" />
        <section className="carousel">
          <AliceCarousel
            mouseTracking
            keyboardNavigation
            infinite
            responsive={ responsive }
          >
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
          </AliceCarousel>
        </section>
      </div>
    );
  }
}

export default SolarSystem;
