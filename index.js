// Code your solution in this file


// function lowerCaseDrivers(drivers) {
//   return drivers.map(function(driver) {
//     return driver.toLowerCase()
//   })
// }

const lowerCaseDrivers = (drivers) => {
  return drivers.map(driver => driver.toLowerCase())
}

const nameToAttributes = (drivers) => {
  return drivers.map(driver => {
    const firstName = driver.split(' ')[0]
    const lastName = driver.split(' ')[1]
    return {firstName: `${firstName}`, lastName: `${lastName}`}
  })
}

const attributesToPhrase = (drivers) => {
  return drivers.map(driver => {
    return `${driver.name} is from ${driver.hometown}`
  })
}
