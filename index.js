// Code your solution in this file.
let lowerCaseDrivers = drivers => {
    return drivers.map(driver => driver.toLowerCase());
} 

let nameToAttributes = drivers => 
    drivers.map(driver => driver = {firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]});

let attributesToPhrase = drivers =>
    drivers.map(driver => driver = `${driver.name} is from ${driver.hometown}`);