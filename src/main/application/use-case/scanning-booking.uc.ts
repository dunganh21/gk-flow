import { BookingExtract } from '@/shared/types/booking-extract.type'
import { bookingScanData } from '../../infrastructure/data/booking.data'

export const scanningBookingInformation = (): BookingExtract => {
  return bookingScanData
}
