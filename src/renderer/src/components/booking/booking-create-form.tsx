'use client '

import { Button } from '@components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@components/ui/form'
import { Input } from '@components/ui/input'
import { useBookingForm } from './boking-form.hook'

const BookingForm = () => {
  const { form, previewForm } = useBookingForm()
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(previewForm)} className="space-y-8">
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
