/**
 * Contact có thẻ đại diện liên lạc cho nhiều đơn vị khác nhau
 * 1. Aggent nhận hàng bên  Nhật
 * 2. Công ty vận chuyển container ra cảng
 */
export interface Contact {
  id: string
  email: string[]
  representative: string
  /**
   * Có thể sử dụng tag cho mục đích tìm kiếm mail sau này
   */
  tags: string[]

  /**
   * Ghi chú
   */
  note?: string
}
