import * as fs from "fs";
import TimeSlot from "./TimeSlot";
import {Time} from "./Time";

export default class FileParser {
    public static parse(filepath: string) : TimeSlot[] {
        return this.fileToString(filepath).split("\n").map(line => {
                const [day, timeSlot] = line.split(" ");
                const [beginning, end] = timeSlot.split("-").map(time => new Time(time));
                return new TimeSlot(parseInt(day), beginning, end);
            });
    }

    public static fileToString = (filepath: string) : string => {
        return  fs.readFileSync(filepath).toString();
    }
}
