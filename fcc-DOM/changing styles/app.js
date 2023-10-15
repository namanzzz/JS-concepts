// DOM manipulation

const title = document.querySelector('#main-heading');
title.style.color='red'; //inline styling



const listItems = document.querySelectorAll('.list-items');
console.log(listItems);

// listItems.style.fontSize = '50px';
// we're gonna have to loop thru every list items

for(let i=0;i<listItems.length;i++){
    listItems[i].style.fontSize = '3rem';
}
