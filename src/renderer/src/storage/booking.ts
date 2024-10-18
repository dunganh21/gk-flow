import { BookingExtract } from '@/shared/types/booking-extract.type'
import { createStore } from '@renderer/utils/zustand'

export interface BookingStore {
  booking: BookingExtract | null
  setReviewBooking: (booking: BookingExtract) => void
}
export const useBookingStore = createStore<BookingStore>((set) => ({
  booking: null,

  setReviewBooking: (booking: BookingExtract) =>
    set((state) => {
      state.booking = booking
    })
}))
