import TimeSlot from "../../src/TimeSlot";
import {Time} from "../../src/Time";

describe("TimeSlot", () => {
    describe("compareTo", () => {
        it("should return 0 when comparing two equal time slots", () => {
            // given
            const timeSlot1 = new TimeSlot(1, new Time("8:45"), new Time("12:59"));
            const timeSlot2 = new TimeSlot(1, new Time("8:45"), new Time("12:59"));

            // when
            const result = timeSlot1.compareTo(timeSlot2);

            // then
            expect(result).toEqual(0);
        })

        it("should return -1 when comparing two time slots with different days", () => {
            // given
            const timeSlot1 = new TimeSlot(1, new Time("8:45"), new Time("12:59"));
            const timeSlot2 = new TimeSlot(2, new Time("8:45"), new Time("12:59"));

            // when
            const result = timeSlot1.compareTo(timeSlot2);

            // then
            expect(result).toEqual(-1);
        })

        it("should return 1 when comparing two time slots with different beginning hours", () => {
            // given
            const timeSlot1 = new TimeSlot(1, new Time("9:45"), new Time("12:59"));
            const timeSlot2 = new TimeSlot(1, new Time("8:45"), new Time("12:59"));


            // when
            const result = timeSlot1.compareTo(timeSlot2);

            // then
            expect(result).toEqual(1);
        })
    })
    describe("isOverlapping", () => {
        it("should return true when two time slots are overlapping", () => {
            // given
            const timeSlot1 = new TimeSlot(1, new Time("8:45"), new Time("12:59"));
            const timeSlot2 = new TimeSlot(1, new Time("12:00"), new Time("12:59"));

            // when
            const result = timeSlot1.isOverlapping(timeSlot2);

            // then
            expect(result).toEqual(true);
        })

        it("should return false when two time slots are not overlapping", () => {
            // given
            const timeSlot1 = new TimeSlot(1, new Time("8:45"), new Time("12:59"));
            const timeSlot2 = new TimeSlot(1, new Time("13:00"), new Time("13:59"));

            // when
            const result = timeSlot1.isOverlapping(timeSlot2);

            // then
            expect(result).toEqual(false);
        })

        it("should return true when two time slots are overlapping by 1min", () => {
            // given
            const timeSlot1 = new TimeSlot(1, new Time("8:45"), new Time("09:15"));
            const timeSlot2 = new TimeSlot(1, new Time("09:15"), new Time("09:45"));

            // when
            const result = timeSlot1.isOverlapping(timeSlot2);

            // then
            expect(result).toEqual(true);
        })
    })
})