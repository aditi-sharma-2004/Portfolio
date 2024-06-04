// components/ShepherdTour.tsx
import React, { useEffect } from 'react';
import Shepherd from 'shepherd.js';

const ShepherdTour: React.FC = () => {
  useEffect(() => {
    const tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'class-name-override',
        scrollTo: { behavior: 'smooth', block: 'center' }
      }
    });

    tour.addStep({
      id: 'step-1',
      text: 'Step 1: About Me',
      attachTo: {
        element: '.about-me-element',
        on: 'bottom'
      },
      buttons: [
        {
          text: 'Next',
          action: tour.next
        }
      ]
    });

    // Add more steps as needed...

    tour.start();

    // Cleanup function to remove the tour when the component unmounts
    return () => {
      tour.cancel();
    };
  }, []);

  return null;
};

export default ShepherdTour;
