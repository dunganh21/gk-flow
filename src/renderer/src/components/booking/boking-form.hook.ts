import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useBookingStore } from '../../storage/booking'

const formSchema = z.object({
  bookingNumber: z.string().min(1),
  freightType: z.string().min(1),
  destination: z.string().min(1),
  etd: z.string().min(1),
  eta: z.string().min(1),
  cutOffTime: z.string().min(1),
  containerQuantity: z.coerce.number().min(1),
  containerSize: z.string().min(1),
  shipName: z.string().min(1),
  shipCode: z.string().min(1)
})

export const useBookingForm = () => {
  const { setReviewBooking } = useBookingStore.getState()
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookingNumber: 'a',
      freightType: 'a',
      destination: 'a',
      etd: '2024-01-01',
      eta: '2024-01-01',
      cutOffTime: '2024-01-01',
      containerQuantity: 1, // Change default value to 1
      containerSize: 'a',
      shipName: 'a',
      shipCode: 'a'
    }
  })

  // 2. Define a submit handler.
  function previewForm(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // Convert string dates to Date objects if needed
    const formattedValues = {
      ...values,
      etd: new Date(values.etd),
      eta: new Date(values.eta),
      cutOffTime: new Date(values.cutOffTime)
    }

    setReviewBooking(formattedValues)
  }

  return { form, previewForm }
}
