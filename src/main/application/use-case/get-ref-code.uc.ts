import { getDateDisplay } from '../utils/get-date-display'

/**
 * Lấy code đại diện cho mỗi booking
 * @example 091724MNIF-635
 * - 091724: MM/DD/YYYY
 * - MNIF: Mã khách hàng
 * - 635: Số count khách hàng cần nhập tay
 */
export const getCustomerRefCode = (date: Date, refCount: number, customerCode: string): string => {
  const dataDisplay = getDateDisplay(date, 'MMDDYY')
  const refCode = `${dataDisplay}${customerCode}-${refCount}`
  return refCode
}
