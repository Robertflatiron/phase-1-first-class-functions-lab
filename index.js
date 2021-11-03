// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia']
function returnFirstTwoDrivers () {
    return drivers.slice(0, 2)
}
function returnLastTwoDrivers () {
    return drivers.slice(2)
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier (integer) {
    return function(abc) {
        return abc * integer
    }
} 

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers) 
}
