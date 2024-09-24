export interface Client {
  /**
   * Mã id db
   */
  _id: string

  /**
   * Mã code đại diện cho khách hàng khách hàng
   */
  code: string

  /**
   * Tên người đại diện cho bên đặt hàng
   */
  representative: string

  /**
   * Tên công ty đặt tàu
   */
  companyName: string

  /**
   * Tên nhà máy nơi xe tải sẽ đến lấy hàng
   */
  factoryName: string

  /**
   * Người thanh toán phí nâng hạ container ở cảng.
   * Cái này khách hàng và gk thường sẽ trao đổi cá nhân qua deal hợp đồng
   */
  liftingPayer: string

  /**
   * Phạm vi công việc
   */
  scopeOfWork: string
}
