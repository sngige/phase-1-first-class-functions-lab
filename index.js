const drivers =['Antonia', 'Nuru', 'Amari', 'Mo']
const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
};
console.log(returnFirstTwoDrivers(drivers))

const returnLastTwoDrivers = drivers => {
    return drivers.slice(-2)
}
console.log (returnLastTwoDrivers(drivers))

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier = multiplier => fare => fare*multiplier

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (drivers,selectingDrivers) => selectingDrivers(drivers)