// Code your solution in this file.
function lowerCaseDrivers(drivers){
 return drivers.map( d => d.toLowerCase());
}



function nameToAttributes(drivers){

 return  drivers.map( function (d) {
  let obj = {};
  obj.firstName = d.slice(0, d.indexOf(" "));
  obj.lastName =  d.slice(d.indexOf(" ") + 1);
  return obj;
 });
 
  
 };
 
 function attributesToPhrase(drivers){
  return drivers.map( d => `${d.name} is from ${d.hometown}`);
 
}
   


