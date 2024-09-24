/**
 * Lấy code đại diện cho mỗi booking
 * @example 091724MNIF-635
 * - 091724: MM/DD/YYYY
 * - MNIF: Mã khách hàng
 * - 635: Số count khách hàng cần nhập tay
 */
export const getCustomerRefCode = (refCount: number, customerCode: string): string => {
  const date = new Date()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const year = date.getFullYear().toString().slice(-2)
  const refCode = `${month}${day}${year}${customerCode}-${refCount}`
  return refCode
}
