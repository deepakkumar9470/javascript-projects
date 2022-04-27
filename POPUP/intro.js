


const intro = new introJs()


intro.setOptions({

    steps: [
        {
          element : '#heading',   
          intro : 'PopUp World!'
        }, 
        {
          element : '#step-one',
          intro : 'Heading of the website'
        },
        {
            element : '#step-two',
            intro : 'Button of the website'
          }
    ]
})

document.querySelector('.start').addEventListener('click',  function(){
  intro.start()
})

intro.start()