import Scheduler from "../../src/Scheduler";
import {Time} from "../../src/Time";
import TimeSlot from "../../src/TimeSlot";


describe("Scheduler", () => {
    describe("scheduleMeeting", () => {
it("should return a time slot with the same day and the next hour when the meeting is less than an hour", () => {
            // given
            const firstPossibleTime = new Time("8:00");
            const day = 1;
            const expectedTimeSlot = new TimeSlot(1, new Time("8:00"), new Time("8:59"));

            // when
            const result = Scheduler.scheduleMeeting(firstPossibleTime, day);

            // then
            expect(result).toEqual(expectedTimeSlot);
        })

        it("should return a time slot the next day when the first possible time is too late", () => {
            // given
            const firstPossibleTime = new Time("17:01");
            const day = 1;
            const expectedTimeSlot = new TimeSlot(2, new Time("8:00"), new Time("8:59"));

            // when
            const result = Scheduler.scheduleMeeting(firstPossibleTime, day);

            // then
            expect(result).toEqual(expectedTimeSlot);
        })

    })
})