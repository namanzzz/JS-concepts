

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


