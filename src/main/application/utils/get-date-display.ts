import dayjs from 'dayjs'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.extend(localizedFormat)
export const getDateDisplay = (date: Date, formatString: string): string => {
  const dayjsDate = dayjs(date)
  return dayjsDate.format(formatString)
}
