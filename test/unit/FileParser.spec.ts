import TimeSlot from "../../src/TimeSlot";
import FileParser from "../../src/FileParser";
import {Time} from "../../src/Time";


describe("FileParser", () => {
    it("should parse time slot file", () => {
        // given
        const filePath = "data/input1.txt";
        const expectedTimeSlots : TimeSlot[] = [
            new TimeSlot(1, new Time("8:45"), new Time("12:59")),
            new TimeSlot(2, new Time("8:24"), new Time("10:54")),
            new TimeSlot(1, new Time("14:45"), new Time("14:47")),
            new TimeSlot(3, new Time("9:56"), new Time("16:25")),
            new TimeSlot(5, new Time("15:16"), new Time("16:28")),
        ];

        // when

        const timeSlots = FileParser.parse(filePath)

        // then

        expect(timeSlots.length).toEqual(expectedTimeSlots.length);
        expect(timeSlots).toEqual(expectedTimeSlots);
    });
});