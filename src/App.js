import React from 'react';
import Header from './components/Header';
import HeaderSolarSystem from './components/HeaderSolarSystem';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import Footer from './components/Footer';

class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <HeaderSolarSystem />
        <SolarSystem />
        <Missions />
        <Footer />
      </main>
    );
  }
}

export default App;
