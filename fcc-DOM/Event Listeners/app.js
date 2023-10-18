// Event Listener

// element.addEventListener('click', function);

const buttonTwo = document.querySelector('.btn-2');
const buttonThree = document.querySelector('.btn-3');

function alertBtn(){
    alert('I also love javascript - button 2');
}
function alertBtn2(){
    alert('So do I - button 3')
}

buttonTwo.addEventListener('click', alertBtn);
buttonThree.addEventListener('mouseover', alertBtn2);