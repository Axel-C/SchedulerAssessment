export class Time {
    public hour: number;
    public minute: number;

    constructor(description: string) {
        const [hour, minute] = description.split(":").map(Number);
        this.hour = hour;
        this.minute = minute;
    }

    public after(duration: number): Time {
        let date = new Date();
        date.setHours(this.hour, this.minute);
        date.setMinutes(date.getMinutes() + duration - 1);

        return new Time(`${date.getHours()}:${date.getMinutes()}`)
    }

    public justAfter(): Time {
        let date = new Date();
        date.setHours(this.hour, this.minute);
        date.setMinutes(date.getMinutes() + 1);

        return new Time(`${date.getHours()}:${date.getMinutes()}`)
    }

    public compareTo(otherTime: Time): number {
        if (this.hour !== otherTime.hour) {
            return this.hour - otherTime.hour;
        }
        return this.minute - otherTime.minute;
    }

    public isBefore(otherTime: Time): boolean {
        return this.compareTo(otherTime) <= 0;
    }

    public isAfter(otherTime: Time): boolean {
        return this.compareTo(otherTime) >= 0;
    }

    public toString(): string {
        return `${String(this.hour).padStart(2 , "0")}:${String(this.minute).padStart(2, "0")}`;
    }
}