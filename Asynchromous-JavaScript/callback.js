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


const order = (Fruit_name, call_production) => {
  console.log('placing the order...')
  setTimeout(()=>{
    console.log(`${Fruit_name} was selected`)

    call_production();

  },2000)
  
};

const production = () => {
  setTimeout(()=>{
    console.log('The production has started');
    setTimeout(()=>{
      console.log('The fruit has been chopped');
      setTimeout(()=>{
        console.log(` ${stocks.liquid[0]} and ${stocks.liquid[1]} was 
        added`)
        setTimeout(()=>{
          console.log('started the machine');
        },1000)

        setTimeout(()=>{
          console.log(`selected the ${stocks.holder[0]}`)
        },1000)
        setTimeout(()=>{
          console.log(`added the toppings ${stocks.toppings[0]} 
          and ${stocks.toppings[1]}`)
        },3000)

        setTimeout(()=>{
          console.log('select the icecream');
          setTimeout(()=>{
             console.log('serve the icecream')
          },3000)
        },2000);
        
      },1000)
      
    },2000)
  },0000)
}

// problem callback hell
/*
  solution is promises
  relations in callbacks
  parents, children, grandchildren, grand grand children, grand 
 grand grand children................
*/


order(stocks.Fruits[0], production);



















