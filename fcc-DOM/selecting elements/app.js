// DOM manipulation

// GetElementById()
const title = document.getElementById('main-heading');
console.log(title);


// GetElementByClassName()

const listItem = document.getElementsByClassName('list-items');
console.log(listItem);


//GetElmentByTagName()
const list_items = document.getElementsByTagName('li');
console.log(list_items);


//querySelector()
// returns the first most element of matching tagname, classname or id
const container = document.querySelector('.list-items');
console.log(container);



//querySelectorAll()
// to select all elements with matching classnames, tagname, or ids 
const containerr = document.querySelectorAll('.list-items');
console.log(containerr);

