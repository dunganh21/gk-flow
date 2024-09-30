'use client'

import { z } from 'zod'
import { Button } from '@components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'

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

const BookingForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      bookingNumber: '',
      freightType: '',
      destination: '',
      etd: '',
      eta: '',
      cutOffTime: '',
      containerQuantity: 1, // Change default value to 1
      containerSize: '',
      shipName: '',
      shipCode: ''
    }
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // Convert string dates to Date objects if needed
    const formattedValues = {
      ...values,
      etd: new Date(values.etd),
      eta: new Date(values.eta),
      cutOffTime: new Date(values.cutOffTime)
    }
    console.log('formattedValues:', formattedValues)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="bookingNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Booking Number</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="freightType"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Freight Type</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="destination"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destination</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="etd"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ETD</FormLabel>
              <FormControl>
                <Input {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="eta"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ETA</FormLabel>
              <FormControl>
                <Input {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cutOffTime"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cut Off Time</FormLabel>
              <FormControl>
                <Input {...field} type="date" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="containerQuantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Container Quantity</FormLabel>
              <FormControl>
                <Input {...field} type="number" min="1" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="containerSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Container Size</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shipName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ship Name</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="shipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ship Code</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}

export default BookingForm
