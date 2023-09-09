// Promises 1

const event = new Promise((resolve,reject) => {
  let name="John";
  if(name=="Naman"){
    resolve(name);
  }
  else{
    reject("Name was not Naman, name was: " + name);
  }
  
});

event.then((name)=>console.log(name)).catch((error)=>{
    console.log(error);
}).finally(()=>{
  console.log("Promise resolved")
})



// Promises 2


let stocks = {
  Fruits: ['strawberry', 'graps', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts']
}

let is_shop_open = true;


let order = (time, work) => {
  return new Promise((resolve,reject)=>{
    if(is_shop_open) {
      setTimeout(()=>{
        resolve(work());
      }, time)
      
    }
    else reject(
      console.log("our shop is closed")
    )
    
  })
}


order(2000, ()=>console.log(`${stocks.Fruits[0]} was selected`))

// promise chaining
// .then() .then() .then()
.then(()=>{
  return order(0000, ()=> console.log('production has started'))
})

.then(()=>{
  return order(2000, ()=> console.log(`chopped the fruit`));
})
.then(()=>{
  return order(3000, () => console.log(`added ${stocks.liquid[0]} and ${stocks.liquid[1]}`))
})
.then(()=>{
  return order(1000, ()=>{ console.log(`starting the machine`)})
})

.then(()=>{
  return order(2000, ()=>{
    console.log(`icecream placed on ${stocks.holder[0]}`)
  })
})

.then(()=>{
  return order(3000, ()=>{
    console.log(`${stocks.toppings[0]} was selected`)
  })
})

.then(()=>{
  return order(2000, ()=>{
    console.log(`icecream was served`)
  })
})

  //error handling
.catch((err)=>{
  console.log('customer left')
})

// whether the promise is resolved or rejected finally handler runs anyways
.finally(()=>{
  console.log(`deal's done I'm outta here`)
})


