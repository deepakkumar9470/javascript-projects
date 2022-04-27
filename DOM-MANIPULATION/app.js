
// const dk = document.querySelector('.d')

// // For change text of tag
// dk.innerHTML = 'I am PrithviRaj Chouhan'

// // For change color
// dk.style.color = 'blue'

// // For change font size
// dk.style.fontSize = '50px'

// // For adding new classname
// dk.classList.add('myname')

// // For removing  classname
// dk.classList.remove('d')




/***** For adding new tag , html to any div, container *****/
// Craete elements

// const parent = document.querySelector('.parent')
// const hd = document.createElement('h2')
// const h = document.createElement('h3')
// const para = document.createElement('p')


// hd.innerHTML = 'Hi from create element'
// h.innerHTML = 'I am h3 tag wow!'
// para.innerHTML = 'My self Deepak Kumar from Loyabad bo 7 Near P.S'

// // For adding h2 into div i.e. parent
// parent.appendChild(hd)
// parent.appendChild(para)

// // For inserting tag before any tag i.e. h3 before h2
// para.insertAdjacentElement('afterend', h)





/***** DOM Events *****/
// const hd = document.querySelector('#hd')
// const btn = document.querySelector('#btn')

// btn.addEventListener('click', function (event) {

//     console.log('btn clicked..')

//     hd.style.color = '#F76E11'
//     hd.style.fontSize = '50px'

// })




// const bulbSwitch = document.querySelector('#bulbswitch')
// const btn = document.querySelector('#btn')


// btn.addEventListener('click', function (e){

//           if(bulbSwitch.src.match('off')){
//                     bulbSwitch.src = './bulb-on.jpg'
//                     btn.innerHTML = 'Turn OF'
//           }else{
//                      bulbSwitch.src = './bulb-off.jpg'
//                      btn.innerHTML = 'Turn ON'
//           }

// })









const root = document.querySelector('.root')
const btn = document.querySelector('.btn')
const bulb = document.querySelector('#bulbswitch')


btn.addEventListener('click', function(e){
    userData()
})


function createElement(item){

       const card = document.createElement('div')
       
       card.classList.add('card')
    

       const image = document.createElement('img')

        image.src = item.thumbnailUrl
    

       const title = document.createElement('h3')
       title.innerHTML = item.title

       card.appendChild(image)
       card.appendChild(title)

       root.appendChild(card)


}

function getPhotoes(photos){
    // console.log('photo hai bhai',photos)

   photos.forEach(function(items){
       console.log(items)
       createElement(items)
         
   })
}


function userData(){

    fetch('https://jsonplaceholder.typicode.com/photos')
    .then((res)=> res.json())
    .then((items) =>{
        getPhotoes(items)
    })
}























