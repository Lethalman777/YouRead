import { DateRange } from "../enums/DateRange"

export function getDateRadio(){
  return [
    {
      label:DateRange.week, date: new Date( new Date().setDate(new Date().getDate() - 7))
    },
    {
      label:DateRange.twoWeeks, date: new Date( new Date().setDate(new Date().getDate() - 14))
    },
    {
      label:DateRange.month, date: new Date( new Date().setMonth(new Date().getMonth() - 1))
    },
    {
      label:DateRange.sixMonth, date: new Date( new Date().setMonth(new Date().getMonth() - 6))
    },
    {
      label:DateRange.year, date: new Date( new Date().setFullYear(new Date().getFullYear() - 1))
    },
    {
      label:DateRange.overYear, date: new Date( new Date().setFullYear(new Date().getFullYear() - 7))
    }
  ]
}
