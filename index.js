// Code your solution in this file.
function lowerCaseDrivers(array) {
  let newarray = [];

  array.map(function (name) {
    newarray.push(name.toLowerCase())
  })
  return newarray;
}


function nameToAttributes(array) {
  let attributes = array.map(function (name) {

    let namearray = name.split(" ");

    return Object.assign({}, { "firstName": namearray[0] }, { "lastName": namearray[1] })

  })

  return attributes
}

function attributesToPhrase(array) {

  let newarray = [];

  array.map(function (driver) {
    newarray.push(`${driver.name} is from ${driver.hometown}`)
  })

  return newarray;
}