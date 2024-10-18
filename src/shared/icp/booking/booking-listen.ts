import { ipcMain } from 'electron'
import { BOOKING_PROVIDE_CHANNEL } from './booking-channel'
import { BookingExtract } from '@/shared/types/booking-extract.type'

export const addBookingEventListener = () => {
  ipcMain.handle(BOOKING_PROVIDE_CHANNEL, (event, booking: BookingExtract) => {
    console.log('[DEBUG] / ipcMain.handle / event:', event)
    console.log('[DEBUG] / ipcMain.handle / booking:', booking)
  })
}
