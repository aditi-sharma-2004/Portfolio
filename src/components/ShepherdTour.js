"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// components/ShepherdTour.tsx
var react_1 = require("react");
var shepherd_js_1 = require("shepherd.js");
var ShepherdTour = function () {
    (0, react_1.useEffect)(function () {
        var tour = new shepherd_js_1.default.Tour({
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
        return function () {
            tour.cancel();
        };
    }, []);
    return null;
};
exports.default = ShepherdTour;
