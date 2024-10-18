import { ipcRenderer, contextBridge } from 'electron'
import { BOOKING_PROVIDE_CHANNEL } from './booking-channel'
import { BookingExtract } from '@/shared/types/booking-extract.type'

export const exposeBookingContext = () => {
  contextBridge.exposeInMainWorld('booking', {
    provideBooking: (booking: BookingExtract) =>
      ipcRenderer.invoke(BOOKING_PROVIDE_CHANNEL, booking)
  })
}
