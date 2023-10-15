// creating elements

const ul = document.querySelector('ul');
const li = document.createElement('li');


// adding elements


ul.appendChild(li);


// modifying text
// innerText, textContent, innerHTML

/*
const firstListItem = document.querySelector('.list-items');
console.log(firstListItem.innerText);
console.log(firstListItem.innerHTML);
console.log(firstListItem.textContent);
*/

li.innerText = 'Jason - the midnight';


// modifying atributes and classes
li.setAttribute('id', 'main-heading');
li.removeAttribute('id'); 

const title = document.querySelector('#main-heading');
console.log(title.getAttribute('id'));

li.classList.add('added-class');
li.classList.remove('added-class');
li.addEventListener('click',function(){
    li.classList.toggle('added-class');
});

// check whether it containes a particular class
console.log(li.classList.contains('added-class'));





// remove elements
// li.remove();

