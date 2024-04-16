import {Time} from "./Time";

export default class TimeSlot {
    day : number;
    beginning : Time;
    end : Time;

    constructor(day: number, beginning: Time, end: Time) {
        this.day = day;
        this.beginning = beginning;
        this.end = end;
    }

    public compareTo(otherTimeSlot: TimeSlot) : number {
        if (this.day !== otherTimeSlot.day) {
            return this.day - otherTimeSlot.day;
        }
        return this.beginning.compareTo(otherTimeSlot.beginning);
    }

    public isBefore(otherTimeSlot: TimeSlot) : boolean {
        return this.compareTo(otherTimeSlot) <= 0;
    }

    public isAfter(otherTimeSlot: TimeSlot) : boolean {
        return this.compareTo(otherTimeSlot) >= 0;
    }

    public isOverlapping(otherTimeSlot: TimeSlot) : boolean {
        if (this.day !== otherTimeSlot.day) {
            return false;
        }
        return this.beginning.isBefore(otherTimeSlot.end)
            && this.end.isAfter(otherTimeSlot.beginning)
    }

    public toString() : string {
        return `${this.day} ${this.beginning.toString()}-${this.end.toString()}`;
    }
}