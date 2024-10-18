import { exposeBookingContext } from './booking/booking-context'

export function exposeContexts() {
  exposeBookingContext()
}
