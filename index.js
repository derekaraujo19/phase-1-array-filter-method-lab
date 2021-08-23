// Code your solution here
function findMatching(drivers, string) {
  let matchList = drivers.filter(function(driver) {
    return driver.toUpperCase() === string.toUpperCase();
  })
  return matchList;
}


function fuzzyMatch(drivers, string) {
  let matchList = drivers.filter(function(driver) {
    if (string.length === 2) {
      return (driver.slice(0, 2) === string);
    } else {
      return (driver[0] === string);
    }
  })
  return matchList;
}

function matchName(drivers, string) {
  let matchList = drivers.filter(function(element) {
    return element.name === string;
  })
  return matchList;
}