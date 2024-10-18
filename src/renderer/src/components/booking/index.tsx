import { useBookingStore } from '../../storage/booking'
import BookingForm from './booking-create-form'
import { Button } from '../ui/button'

export const BookingCreate = () => {
  const { booking } = useBookingStore()

  return (
    <>
      {!booking ? (
        <BookingForm />
      ) : (
        <div>
          {Object.entries(booking).map(([key, value]) => (
            <div key={key}>
              <span>{key}:</span>
              <span>
                {typeof value === 'object' && value instanceof Date
                  ? value.toISOString()
                  : typeof value === 'number'
                    ? value.toString()
                    : value}
              </span>
            </div>
          ))}
          <div className="flex gap-2">
            <Button>Choose template</Button>
            <Button>Create file</Button>
            <Button>Save</Button>
          </div>
        </div>
      )}
    </>
  )
}
