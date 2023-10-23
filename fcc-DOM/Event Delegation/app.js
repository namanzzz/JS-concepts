// Event Delegation

/* It allows users to append a single event listener to a parent element that adds it to all of its present and future descendents that matche a selector 
*/



// document.querySelector('#football').addEventListener('click', function(event){
//     console.log('football is clicked');
//     const target = event.target;
//     if(target.matches('li')){
//         target.style.backgroundColor = 'lightgrey'
//     }
// })


// document.querySelector('#tennis').addEventListener('click', function (event) {
//     console.log('tennis is clicked');
//     const target = event.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'lightgrey'
//     }
// })

// document.querySelector('#boxing').addEventListener('click', function (event) {
//     console.log('boxing is clicked');
//     const target = event.target;
//     if (target.matches('li')) {
//         target.style.backgroundColor = 'red'
//     }
// })

document.querySelector("#sports").addEventListener('click', (event) => {
    console.log(event.target.getAttribute("id") + ' is clicked');
    const target = event.target;
    if(target.matches('li')){
        target.style.backgroundColor = 'red';
    }
});

const sports =  document.querySelector('#sports');
const newSport = document.createElement('li');
newSport.innerText = 'UFC';
newSport.setAttribute("id", 'ufc');
sports.appendChild(newSport);
