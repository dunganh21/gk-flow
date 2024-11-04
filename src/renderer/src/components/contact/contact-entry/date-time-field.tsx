import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui'
import { FormDescription } from '../../ui/form'
import { Input } from '../../ui'
import { UseFormReturn, FieldValues } from 'react-hook-form'
import { ContactDefFieldDate } from '@shared/types/contact'

interface DateTimeFieldProps {
  form: UseFormReturn<FieldValues>
  fieldDef: ContactDefFieldDate
}

const ContactEntryDateTimeField = ({ form, fieldDef }: DateTimeFieldProps) => {
  const { key, name, description } = fieldDef

  return (
    <FormField
      control={form.control}
      name={key}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <FormControl>
            <Input type="date" {...field} />
          </FormControl>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  )
}

export default ContactEntryDateTimeField
