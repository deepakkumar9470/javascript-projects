
/***** Adding Product Tour start *****/

const intro = new introJs()


intro.setOptions({

    steps: [
        {
          element : '.heading',   
          intro : 'Deepak Kumar'
        }, 
        {
          element : '#step-one',
          intro : 'Heading of the website'
        },
        {
            element : '#step-two',
            intro : 'Home!'
          },
          {
            element : '#step-three',
            intro : 'Learn More!'    
          },
          {
            element : '#step-four',
            intro : 'Contact Us!'
          },
          {
            element : '#step-5',
            intro : 'About Us!'
          },
    ]
})

// document.querySelector('.start').addEventListener('click', ()=>{
//   intro.start()
// })

 intro.start()
/***** Adding Product Tour end *****/ 




// const close_btn = document.querySelector('.close_btn')
// const popup = document.querySelector('#popUpmain')

// close_btn.addEventListener('click', function(){
         

//     popup.style.display = 'none'

// })




// Ans : undefined
// console.log('test')

// function customObject(){this.value = 2;}

// customObject.prototype.inc = function (){
//   this.value++;
// }

// function changer(func){
//   func();
// }

// var o = new customObject()
// alert(o.value);

// o.inc()
// alert(o.value)

// changer(o.inc)
// console.log(changer(o.inc))
// alert(o.value)




// const tour = new Shepherd.Tour({
//     useModalOverlay: true,
//     defaultStepOptions: {
//         cancelIcon: {
//             enabled: true
//           },
//         classPrefix: 'my-tour-',
//       classes: 'shepherd-theme-custom',
//       scrollTo: true
//     }
//   });

//   tour.addStep({
//     id: 'example-step',
//     text: 'Start of demo website!',
//     attachTo: {
//       element: '.logo',
//       on: 'bottom'
//     },
//     buttons: [
//       {
//         text: 'Next',
//         action: tour.next
//       }
//     ]
//   });
//   tour.addStep({
//     id: 'example-step',
//     text: 'Heading paragraph of the website!',
//     attachTo: {
//       element: '#step-one',
//       on: 'bottom'
//     },
    
//     buttons: [
//       {
//         text: 'Next',
//         action: tour.next
//       }
//     ]
//   });
//   tour.addStep({
//     id: 'example-step',
//     text: 'Home!',
//     attachTo: {
//       element: '#step-two',
//       on: 'bottom'
//     },
    
//     buttons: [
//       {
//         text: 'Next',
//         action: tour.next
//       }
//     ]
//   });
//   tour.addStep({
//     id: 'example-step',
//     text: 'Learn more!',
//     attachTo: {
//       element: '#step-three',
//       on: 'bottom'
//     },
//     buttons: [
//       {
//         text: 'Next',
//         action: tour.next
//       }
//     ]
//   });

//   tour.addStep({
//     id: 'example-step',
//     text: 'Contact Us!',
//     attachTo: {
//       element: '#step-four',
//       on: 'bottom'
//     },
//     buttons: [
//       {
//         text: 'Next',
//         action: tour.next
//       }
//     ]
//   });

// tour.start()

//   document.querySelector('.start').addEventListener('click', ()=>{
//   tour.start()
// })
