// components/Tour.tsx
import React, { useEffect, useRef } from 'react';
import Shepherd from 'shepherd.js';
import 'shepherd.js/dist/css/shepherd.css';

const Tour: React.FC = () => {
  const Tour = useRef<Shepherd.Tour | null>(null);

  useEffect(() => {
    Tour.current = new Shepherd.Tour({
      defaultStepOptions: {
        classes: 'shepherd-theme-arrows',
        scrollTo: true,
      },
    });

    Tour.current.addStep({
      id: 'intro',
      text: 'Welcome to my portfolio! Let me show you around.',
      attachTo: {
        element: '.intro',
        on: 'bottom',
      },
      buttons: [
        {
          text: 'Next',
          action: Tour.current?.next,
        },
      ],
    });

    Tour.current.addStep({
      id: 'projects',
      text: 'Here are some of my projects.',
      attachTo: {
        element: '.projects',
        on: 'right',
      },
      buttons: [
        {
          text: 'Back',
          action: Tour.current?.back,
        },
        {
          text: 'Next',
          action: Tour.current?.next,
        },
      ],
    });

    Tour.current.addStep({
      id: 'contact',
      text: 'Feel free to contact me.',
      attachTo: {
        element: '.contact',
        on: 'top',
      },
      buttons: [
        {
          text: 'Back',
          action: Tour.current?.back,
        },
        {
          text: 'Done',
          action: Tour.current?.complete,
        },
      ],
    });

    Tour.current.start();

    return () => {
      Tour.current && Tour.current.destroy();
    };
  }, []);

  return null;
};

export default Tour;
