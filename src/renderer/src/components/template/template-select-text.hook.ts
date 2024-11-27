import { BookingExtract } from '@/shared/types/booking-extract.type'
import { ContactDef } from '@/shared/types/contact'
import { useCallback, useMemo } from 'react'
import { useRxData } from 'rxdb-hooks'
import { TextPickerOptionProps } from '../ui/rich-text/plugin/custom-text-picker-plugin'

export const useTemplateSelectText = () => {
  // Query all contact definitions
  const queryConstructor = useCallback(
    (collection) =>
      collection.find({
        selector: {},
        sort: [{ name: 'asc' }]
      }),
    []
  )

  const { result: contactDefs, isFetching } = useRxData<ContactDef>(
    'contact-defs',
    queryConstructor
  )
  const bookingOptions = useMemo(() => {
    // Add booking fields
    const bookingFields: { id: keyof BookingExtract; label: string }[] = [
      { id: 'bookingNumber', label: 'Số booking' },
      { id: 'freightType', label: 'Loại hàng hóa' },
      { id: 'destination', label: 'Điểm đến' },
      { id: 'etd', label: 'Ngày khởi hành' },
      { id: 'eta', label: 'Ngày đến' },
      { id: 'cutOffTime', label: 'Deadline nhận hàng' },
      { id: 'containerQuantity', label: 'Số lượng container' },
      { id: 'containerSize', label: 'Kích thước container' },
      { id: 'shipName', label: 'Tên tàu' },
      { id: 'shipCode', label: 'Mã tàu' }
    ]

    const bookingOptions: TextPickerOptionProps[] = bookingFields.map((field) => ({
      title: `booking/${field.id} (${field.label})`,
      content: `{{booking.${field.id}}}`,
      keywords: ['booking', field.id, field.label]
    }))

    return bookingOptions
  }, [])

  // Transform contact definitions and booking fields into TextPickerOptionProps format
  const textOptions = useMemo(() => {
    const options: TextPickerOptionProps[] = [...bookingOptions]

    // Add contact definition fields
    if (contactDefs) {
      contactDefs.forEach((contactDef) => {
        const mutableContactDef = contactDef.toMutableJSON()
        mutableContactDef.fields.forEach((field) => {
          options.push({
            title: `${mutableContactDef.name}/${field.key} (${field.name})`,
            content: `{{${mutableContactDef.id}.${field.key}}}`,
            keywords: [mutableContactDef.name, field.key, field.name]
          })
        })
      })
    }

    return options
  }, [contactDefs])

  return {
    textOptions,
    isFetching
  }
}
