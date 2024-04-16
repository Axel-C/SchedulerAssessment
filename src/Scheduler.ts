import TimeSlot from "./TimeSlot";
import {Time} from "./Time";
import FileParser from "./FileParser";

const FIRST_DAY = 1;
const LAST_DAY = 5;
const FIRST_HOUR = new Time("8:00");
const END_OF_DAY = new Time("17:59")
const MEETING_DURATION = 60;

export default class Scheduler {

    public static runSchedulerOnFile = (inputPath: string): string => {
        const timeSlotsUnavailable = FileParser.parse(inputPath);
        const availableTimeSlot = Scheduler.findAvailableTimeSlots(timeSlotsUnavailable);
        if(availableTimeSlot){
            return availableTimeSlot.toString();
        }else {
            return "No available time slot";
        }
    }

    public static scheduleMeeting = (fisrtPossibleTime : Time , day : number) : TimeSlot => {
        if(fisrtPossibleTime.after(MEETING_DURATION).isBefore(END_OF_DAY)){
            return new TimeSlot(day, fisrtPossibleTime, fisrtPossibleTime.after(MEETING_DURATION));
        }else {
            const possibleDay = day + 1;
            if(possibleDay > LAST_DAY){
                return undefined;
            }else {
                return new TimeSlot(possibleDay, FIRST_HOUR, FIRST_HOUR.after(MEETING_DURATION));
            }
        }
    }

    public static findAvailableTimeSlots = (timeSlotsUnavailable: TimeSlot[]): TimeSlot | undefined => {
       let candidateTimeSlot = new TimeSlot(FIRST_DAY, FIRST_HOUR, FIRST_HOUR.after(MEETING_DURATION));
       const unavailableTimeSlotsSorted = timeSlotsUnavailable.sort((a, b) => a.compareTo(b));

       for(let i = 0; i < unavailableTimeSlotsSorted.length; i++){
            if (candidateTimeSlot.isOverlapping(unavailableTimeSlotsSorted[i])) {
                candidateTimeSlot = Scheduler.scheduleMeeting(unavailableTimeSlotsSorted[i].end.justAfter(), unavailableTimeSlotsSorted[i].day);
            } else if(unavailableTimeSlotsSorted[i].isAfter(candidateTimeSlot)){
                // At this point, we know that the candidate does not overlap with other time slots because of the array is sorted
                return candidateTimeSlot;
            }
        }
       return undefined;
    }
}