declare module 'shepherd.js' {
    export class Tour {
      constructor(options?: TourOptions);
      addStep(id: string | StepOptions, options?: StepOptions): void;
      next(): void;
      back(): void;
      start(): void;
      complete(): void;
      cancel(): void;
      show(id: string): void;
      destroy(): void;  // Add this line
      steps: Step[];
    }
  
    export interface TourOptions {
      defaultStepOptions?: StepOptions;
      useModalOverlay?: boolean;
    }
  
    export interface StepOptions {
      id?: string;
      text?: string | HTMLElement;
      attachTo?: {
        element: string | HTMLElement;
        on: string;
      };
      buttons?: StepButton[];
      classes?: string;
      scrollTo?: boolean | ScrollToOptions;
      advanceOn?: { selector: string; event: string } | string;
      when?: { show?: () => void; hide?: () => void };
    }
  
    export interface StepButton {
      text: string;
      action: () => void;
      classes?: string;
    }
  
    export interface ScrollToOptions {
      behavior?: 'auto' | 'smooth';
      block?: 'start' | 'center' | 'end' | 'nearest';
      inline?: 'start' | 'center' | 'end' | 'nearest';
    }
  
    export class Step {
      constructor(tour: Tour, options?: StepOptions);
      show(): void;
      hide(): void;
      isOpen(): boolean;
    }
  }
  