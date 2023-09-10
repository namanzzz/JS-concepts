
let stocks = {
  Fruits: ['strawberry', 'graps', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts']
}

let is_shop_open = true;

// let order = () => { 
//   return new Promise((resolve,reject)=>{
    
//     if(true){
//       resolve();
//     }
//     else{
//       reject();
//     }  
//   })
// }

// order()
// .then()
// .then()
// .catch()
// .finally()

async function order(){
  try{
    await abc
  }
  catch(err){
    console.log("abc doesn't exist", err)
  }
  finally{
    console.log('finally block runs code anyways')
  }

}


order().then(()=>{
  console.log('kjddjfkdjfd');
});

