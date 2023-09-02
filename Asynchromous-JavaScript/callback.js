// Callbacks - Calling a function inside another function is called a callback
// forms a connection between functions

function one(callback){

callback(); 
console.log('Step 2 is complete step 1 further');
}

function two(){
  console.log('Step 2');
}

one(two);

// one();
// two();


let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water','ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
}


console.log(stocks.Fruits[0])


let order = (Fruit_name, call_production) => {
  console.log('placing the order...')
  setTimeout(()=>{
    console.log(`selected the fruit ${Fruit_name}  
    and placed the order`)
  },2000)
  
  call_production();
};

let production = () => {
  
};

order(stocks.Fruits[2], production)








