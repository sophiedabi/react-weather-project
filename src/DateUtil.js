export default class DateUtil {
  constructor(date) {
    this.date = date;
  }

  day(short = false) {
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    if (short) {
      return days[this.date.getDay()].substring(0, 3);
    } else {
      return days[this.date.getDay()];
    }
  }

  time() {
    let minutes = this.date.getMinutes();
    if (minutes < 10) minutes = `${0}}`;

    return `${this.date.getHours()}:${this.date.getMinutes()}`;
  }

  dayTime() {
    return `${this.day()} ${this.time()}`;
  }
}
