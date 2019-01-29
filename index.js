
// function lowerCaseDrivers(array) {
//   return array.map( function(driver) { return driver.toLowerCase() } )
// }

let lowerCaseDrivers = array => { return array.map( driver => driver.toLowerCase() ) };

function nameToAttributes(array) {
  return array.map( function(driver) {
    let name = driver.split(" ");
    return Object.assign({}, {firstName: name[0]}, {lastName: name[1]})
  })
}

function attributesToPhrase(array) {
  return array.map( driver => `${driver['name']} is from ${driver['hometown']}`)
}
