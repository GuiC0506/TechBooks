/* =====================================
    NO REFACTORED FUNCITON
*/
function calcTrip(hour, dist) {
    if (hour instanceof Date) {
        if (hour.getHours() > 22 || hour.getHours() < 6) {
            return dist * 3.9;
        } else {
            if (hour.getDay() === 0) {
                return dist * 3;
            } else {
                return dist * 2.1;
            }
        }
    } else {
        return -1;
    }
}

/* =====================================
    REFACTORED FUNCITON
*/
class Trip {
    OVERNIGHT_START = 22;
    OVERNIGHT_END = 6;
    OVERNIGHT_FARE = 3.9;
    SUNDAY_FARE = 3;
    NORMAL_FARE = 2.1;

    constructor(date, distance) {
        if (!(date instanceof Date)) throw new Error("Wrong parameter");
        this.date = date;
        this.distance = distance;
    }

    isOvernight() {
        return this.date.getHours() > this.OVERNIGHT_START || this.date.getHours() < this.OVERNIGHT_END
    }

    isSunday() {
        return this.date.getDay() === 0;
    }

    calculateTripRefactored() {
        if (this.isOvernight()) return this.distance * this.OVERNIGHT_FARE;
        if (this.isSunday()) return this.distance * this.SUNDAY_FARE;
        return this.distance * this.NORMAL_FARE;
    }
}



module.exports = {
    calcTrip,
    Trip
}
