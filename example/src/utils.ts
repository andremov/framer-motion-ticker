import { Media } from './types';
import consultant from './assets/consultant.jpg';
import eeaao from './assets/eeaao.jpg';
import greys from './assets/greys.jpg';
import johnwick4 from './assets/johnwick4.jpg';
import mythicquest from './assets/mythicquest.jpg';
import scream from './assets/scream.jpg';
import shazam from './assets/shazam.jpg';
import shazam2 from './assets/shazam2.jpg';
import tlou from './assets/tlou.jpg';

const media: Media[] = [
  {
    id: 'sm_1',
    image: consultant,
    name: 'The Consultant',
  },
  {
    id: 'sm_2',
    image: eeaao,
    name: 'Everything, Everywhere All At Once',
  },
  {
    id: 'sm_3',
    image: greys,
    name: "Grey's Anatomy",
  },
  {
    id: 'sm_4',
    image: johnwick4,
    name: 'John Wick',
  },
  {
    id: 'sm_5',
    image: mythicquest,
    name: 'Mythic Quest',
  },
  {
    id: 'sm_6',
    image: scream,
    name: 'Scream',
  },
  {
    id: 'sm_7',
    image: shazam,
    name: 'Shazam',
  },
  {
    id: 'sm_8',
    image: shazam2,
    name: 'Shazam 2',
  },
  {
    id: 'sm_9',
    image: tlou,
    name: 'The Last of Us',
  },
];

export default media;
