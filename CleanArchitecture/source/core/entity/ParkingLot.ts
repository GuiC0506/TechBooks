export default class ParkingLot {
    public code: string;
    public capacity: number;
    public openHour: number;
    public closeHour: number;

    constructor(code, capacity, openHour, closeHour) {
        this.code = code;
        this.capacity = capacity;
        this.openHour = openHour;
        this.closeHour = closeHour;
    }
}
