
let ul = document.querySelector('ul');


// 1. Parent node traversal



/*
console.log(ul);
console.log(ul.parentElement);
console.log(ul.parentNode);
*/


// grandparent nodes
//console.log(ul.parentNode.parentNode);

/*
const html = document.documentElement;
console.log(html.parentElement);
console.log(html.parentNode);
*/


// 2. Child Node traversal

// console.log(ul.childNodes);
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// ul.childNodes[1].style.backgroundColor='blue';

/*
console.log(ul.children);
console.log(ul.firstElementChild);
console.log(ul.lastElementChild);
*/



// 3. Sibling Node Traversal

const div = document.querySelector('div');

 console.log(div.childNodes);
 console.log(ul.previousSibling);
 console.log(ul.nextSibling);
 