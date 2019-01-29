// Code your solution in this file.
function lowerCaseDrivers(drivers) {
    return drivers.map(function (driver) {
        return driver.toLowerCase()
    }
    )
}

let nameToAttributes = (drivers) => {
    return drivers.map(driver => Object.assign({}, {}, { firstName: driver.split(" ")[0] }, { lastName: driver.split(" ")[1] }))
}

let attributesToPhrase = (drivers) => {
    let newArr = drivers.map(driver => `${driver.name} is from ${driver.hometown}`)
    return newArr
}
