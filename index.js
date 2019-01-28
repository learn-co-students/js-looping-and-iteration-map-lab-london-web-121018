// Code your solution in this file.
// function lowerCaseDrivers(drivers){
//   return drivers.map(function(driver){
//     return driver.toLowerCase()
//   })
// }

function lowerCaseDrivers(drivers){
  const x = drivers.map(x => x.toLowerCase());
  return x;
}
function nameToAttributes(drivers){
  return drivers.map(function(driver){
    const first = driver.split(' ')[0]
    const second = driver.split(' ')[1]
    return {firstName: `${first}`, lastName: `${second}`}
  })
}

function attributesToPhrase(drivers){
  const x = drivers.map(x => `${x['name']} is from ${x['hometown']}`)
  return x;
}
