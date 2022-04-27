const driver = new Driver();

// Define the steps for introduction
driver.defineSteps([
  {
    element: '.logo',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'left'
    }
  },
  {
    element: '#step-one',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'top'
    },
    onNext: () => {
      // Prevent moving to the next step
      driver.preventMove();
      
    }
  },
  {
    element: '.step-two',
    popover: {
      title: 'Title on Popover',
      description: 'Body of the popover',
      position: 'right'
    }
  },
]);

// Start the introduction
driver.start();