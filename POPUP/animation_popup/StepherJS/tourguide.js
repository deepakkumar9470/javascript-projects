console.log('steptip..')

// https://github.com/tomocode/steptipjs



const tour = new Shepherd.Tour({
    useModalOverlay: true,
    defaultStepOptions: {
        cancelIcon: {
            enabled: true
          },
      classes: 'shepherd-theme-custom',
      scrollTo: true
    }
  });

  tour.addStep({
    id: 'example-step1',
    text: 'Start of demo website!',
    attachTo: {
      element: '.logo',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'example-step2',
    text: 'Heading paragraph of the website!',
    attachTo: {
      element: '#step-one',
      on: 'bottom'
    },
    
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'example-step3',
    text: 'Home!',
    attachTo: {
      element: '#step-two',
      on: 'bottom'
    },
    
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });
  tour.addStep({
    id: 'example-step4',
    text: 'Learn more!',
    attachTo: {
      element: '#step-three',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

  tour.addStep({
    id: 'example-step5',
    text: 'Contact Us!',
    attachTo: {
      element: '#step-four',
      on: 'bottom'
    },
    buttons: [
      {
        text: 'Next',
        action: tour.next
      }
    ]
  });

tour.start()