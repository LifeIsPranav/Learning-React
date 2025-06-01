import introJs from 'intro.js';
import 'intro.js/introjs.css';
import { steps } from './steps';

import '../Tour.css'



const startTour = () => {
  introJs()
    .setOptions({
      steps: steps,
    })

    .start()
}

export default startTour

