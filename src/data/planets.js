import MercurioImg from '../images/mercury-2.jpg';
import VenusImg from '../images/venus.png';
import TerraImg from '../images/terra.png';
import MarteImg from '../images/marte.jpg';
import JupiterImg from '../images/jupiter.jpg';
import SaturnoImg from '../images/saturn.jpg';
import Uranoimg from '../images/urano.jpg';
import Netunoimg from '../images/netuno.png';

const Planets = [
  { name: 'Mercúrio',
    image: MercurioImg,
    sun: '57,910,000 kilometers.',
    mass: '3,302 × 1023 kg (330 billion billion tons).',
    diameter: '4,879 km.',
  },
  { name: 'Vênus',
    image: VenusImg,
    sun: '0.723 U.A. = 1.082 x 108 km',
    mass: '4.869 x 1024 Kg = 81.5% of the earth mass',
    diameter: '12.104 km',
  },
  { name: 'Terra',
    image: TerraImg,
    sun: '149.600.000 km',
    mass: '5,9736 x 1024 kg',
    diameter: '12.756,2 km',
  },
  { name: 'Marte',
    image: MarteImg,
    sun: '227.940.000 km',
    mass: ' 6,42 x 1023 kg',
    diameter: '6794 km',
  },
  { name: 'Júpiter',
    image: JupiterImg,
    sun: '7.783 x 108 km',
    mass: '1899 x 1027 kg = 317.8 times the mass of Earth',
    diameter: '142984 km = 11,209 times the diameter of Earth',
  },
  { name: 'Saturno',
    image: SaturnoImg,
    sun: '1.4 billion km.',
    mass: '568.319 x 1021 kg',
    diameter: '119.3 thousand kilometers',
  },
  { name: 'Urano',
    image: Uranoimg,
    sun: '2.873 billion kilometers',
    mass: '8,6 × 1025 kg',
    diameter: '51,800 kilometers',
  },
  { name: 'Netuno',
    image: Netunoimg,
    sun: '10 million km',
    mass: '1,024 × 1026 kg',
    diameter: '49.572 km',
  },
];

export default Planets;
