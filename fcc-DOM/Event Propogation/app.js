// values are false by default


window.addEventListener('click', 
function() {
    console.log('window');
}, true);


document.addEventListener('click',  function(){
    console.log('Document');
}, true);

document.querySelector('.div-2').addEventListener('click', function(e){
    // e.stopPropagation(); // will stop the propogration at div 2
    console.log('Div 2');
}, {once: true});

document.querySelector('.div-1').addEventListener('click', function(){
    console.log('Div 1');
}, true);

document.querySelector('button').addEventListener('click', function(e){
    console.log(e.target.innerText = 'clicked');
}, true)