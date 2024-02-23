interface CalendarOption {
  month: number;
  year: number;
  startWeekOnSunday?: boolean;
}
//
export default class CalendarGenerator {
  private grid = 42;

  generate(option: CalendarOption): { list: Date[]; total: number } {
    const { month, year, startWeekOnSunday } = option;

    const firstDayOfMonth = this.getFirstDayOfMonth(month, year);
    const daysInMonth = this.getDaysInMonth(month, year);

    const offset = startWeekOnSunday ? firstDayOfMonth.getDay() : (firstDayOfMonth.getDay() + 6) % 7;

    const dates: Date[] = [];

    for (let i = 0; i < this.grid; i++) {
      dates.push(new Date(year, month - 1, 1 + (i - offset)));
    }

    return {
      list: dates,
      total: daysInMonth,
    };
  }

  private getFirstDayOfMonth(month: number, year: number) {
    // cause month in Date starts from 0
    return new Date(year, month - 1, 1);
  }

  private getDaysInMonth(month: number, year: number) {
    return new Date(year, month, 0).getDate();
  }
}
