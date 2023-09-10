
let stocks = {
  Fruits: ['strawberry', 'graps', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts']
}

let is_shop_open = false;


function time(ms){
  return new Promise((resolve,reject)=>{
    if(is_shop_open){
      setTimeout(resolve,ms);
    }
    else{
      reject(console.log('shop is closed'));
    }
  });
}

async function kitchen(){
  try{
    await time(2000)
    console.log(`${stocks.Fruits[0]} was selected`);

    await time(2000)
    console.log('cut the  fruit');

    await time(1000)
    console.log('start the machine');

    await time(2000)
    console.log(`icecream placed on ${stocks.holder[0]}`);
    
    await time(3000)
    console.log(`${stocks.toppings[0]} was selected`);
    
    await time(2000)
    console.log(`served the icecream`);

    

    
  }
  catch(error){
    consle.log('customer left', error)
  }
  finally{
    console.log('day ended shop closed')
  }
}

kitchen();
