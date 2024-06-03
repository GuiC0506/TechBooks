const { Trip, calcTrip } = require("./module.js")

test("Should be normal fare", function() {
    const fare = calcTrip(new Date("2018-10-10T10:00"), 1000);
    expect(fare).toBe(2100);
})

test("Should be normal fare", function() {
    const fare = new Trip(new Date("2018-10-10T10:00"), 1000).calculateTripRefactored();
    expect(fare).toBe(2100);
})

test("Should be overnight", function() {
    const isOvernight = new Trip(new Date("2018-10-10T23:00"), 1000).isOvernight();
    expect(isOvernight).toBe(true);
})

test("Should throw error", function() {
    expect(() => new Trip("some string", 1000)).toThrow(Error);
})
