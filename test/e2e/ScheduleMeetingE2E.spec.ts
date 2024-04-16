import Scheduler from "../../src/Scheduler";
import FileParser from "../../src/FileParser";

describe("ScheduleMeetingE2E", () => {
    it("scheduleMeeting 1", () => {
        // given
        const inputPath = "data/input1.txt";
        const expectedOutput = FileParser.fileToString("data/output1.txt");

        // when
        const output = Scheduler.runSchedulerOnFile(inputPath);

        // then
        expect(output).toEqual(expectedOutput);
        expect(true).toEqual(true)
    })

    it("scheduleMeeting 2", () => {
        // given
        const inputPath = "data/input2.txt";
        const expectedOutput = FileParser.fileToString("data/output2.txt");

        // when
        const output = Scheduler.runSchedulerOnFile(inputPath);

        // then
        expect(output).toEqual(expectedOutput);
        expect(true).toEqual(true)
    })

    it("scheduleMeeting 3", () => {
        // given
        const inputPath = "data/input3.txt";
        const expectedOutput = FileParser.fileToString("data/output3.txt");

        // when
        const output = Scheduler.runSchedulerOnFile(inputPath);

        // then
        expect(output).toEqual(expectedOutput);
        expect(true).toEqual(true)
    })

    it("scheduleMeeting 4", () => {
        // given
        const inputPath = "data/input4.txt";
        const expectedOutput = FileParser.fileToString("data/output4.txt");

        // when
        const output = Scheduler.runSchedulerOnFile(inputPath);

        // then
        expect(output).toEqual(expectedOutput);
        expect(true).toEqual(true)
    })

    it("scheduleMeeting 5", () => {
        // given
        const inputPath = "data/input5.txt";
        const expectedOutput = FileParser.fileToString("data/output5.txt");

        // when
        const output = Scheduler.runSchedulerOnFile(inputPath);

        // then
        expect(output).toEqual(expectedOutput);
        expect(true).toEqual(true)
    })
})