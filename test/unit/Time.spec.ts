import {Time} from "../../src/Time";


describe("Time", () => {
    describe("compareTo", () => {
        it("should return 0 when comparing two times with the same hour and minute", () => {
            // given
            const time1 = new Time("8:45");
            const time2 = new Time("8:45");

            // when
            const result = time1.compareTo(time2);

            // then
            expect(result).toEqual(0);
        })

        it("should return -1 when comparing two times with different hours", () => {
            // given
            const time1 = new Time("8:45");
            const time2 = new Time("9:45");

            // when
            const result = time1.compareTo(time2);

            // then
            expect(result).toEqual(-1);
        })

        it("should return 1 when comparing two times with the same hour and different minutes", () => {
            // given
            const time1 = new Time("8:46");
            const time2 = new Time("8:45");


            // when
            const result = time1.compareTo(time2);

            // then
            expect(result).toEqual(1);
        })
    })
    describe("addMinutes", () => {
        it("should return a new time with the added minutes", () => {
            // given
            const time = new Time("8:00");

            // when
            const result = time.after(60);

            // then
            expect(result).toEqual(new Time("8:59"));
        })
    })
})