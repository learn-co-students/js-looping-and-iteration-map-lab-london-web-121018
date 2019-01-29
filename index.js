// Code your solution in this file.
function lowerCaseDrivers(array){
    return array.map(n => n.toLowerCase());
}

function nameToAttributes(array){
    const driversHash = array.map(function(driver){
        let names = driver.split(' ');
        return Object.assign({}, {firstName: names[0]}, {lastName: names[1]});
    });
    return driversHash
}

function attributesToPhrase(drivers){
   return drivers.map (driver => `${driver.name} is from ${driver.hometown}` );
}



// it('converts to list saying the name and where each individual is from', () => {
//     const drivers = [
//       { name: 'Bobby', hometown: 'Pittsburgh' },
//       { name: 'Sammy', hometown: 'New York' },
//       { name: 'Sally', hometown: 'Cleveland' },
//       { name: 'Annette', hometown: 'Los Angeles' },
//       { name: 'Bobby', hometown: 'Tampa Bay' }
//     ];

//     expect(attributesToPhrase(drivers)).to.eql([
//       'Bobby is from Pittsburgh',
//       'Sammy is from New York',
//       'Sally is from Cleveland',
//       'Annette is from Los Angeles',
//       'Bobby is from Tampa Bay'