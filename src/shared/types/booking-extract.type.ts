export interface BookingExtract {
  /**
   * Số booking trong tờ khai
   */
  bookingNumber: string

  /**
   * Loại hàng hóa
   */
  freightType: string

  /**
   * Điểm đến
   */
  destination: string

  /**
   * Ngày khởi hành
   */
  etd: Date

  /**
   * Ngày đến
   */
  eta: Date

  /**
   * Deadline mà tàu sẽ nhận hàng ở cảng đi (Hải Phòng)
   * Quá giờ này, hàng sẽ ko được chấp nhận lên tàu để vận chuyển
   */
  cutOffTime: Date

  /**
   * Số lượng container cần vận chuyển
   */
  containerQuantity: number

  /**
   * Kích thước container
   */
  containerSize: string

  /**
   * Tên con tàu sẽ vận chuyển chuyến hàng
   */
  shipName: string

  /**
   * Mã con tàu sẽ vận chuyển chuyến hàng
   * Một con tàu có thể vận chuyển nhiều chuyến hàng. Mỗi chuyến hàng sẽ có một mã khác nhau
   */
  shipCode: string
}
