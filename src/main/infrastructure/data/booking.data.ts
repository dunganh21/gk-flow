import { BookingExtract } from '@/shared/types/booking-extract.type'

export const bookingScanData: BookingExtract = {
  bookingNumber: '1234567890',
  freightType: 'FCL',
  destination: 'UKB',
  etd: new Date('2024-09-09'),
  eta: new Date('2024-09-18'),
  cutOffTime: new Date('2024-09-09T18:00:00'),
  containerQuantity: 4,
  containerSize: '40HC',
  shipName: 'NEW MINGZHOU 16',
  shipCode: '2407N'
}
