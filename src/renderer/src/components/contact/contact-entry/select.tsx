import { ContactDefFieldSelect } from '@/shared/types/contact'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui'
import { FormDescription } from '../../ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@components/ui/select'

interface SelectFieldProps {
  form: UseFormReturn<FieldValues>
  fieldDef: ContactDefFieldSelect
}

const ContactEntrySelectField = ({ form, fieldDef }: SelectFieldProps) => {
  const { key, name, description, options } = fieldDef
  if (!options?.length) {
    return null
  }

  return (
    <FormField
      control={form.control}
      name={key}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
              <SelectTrigger>
                <SelectValue placeholder="Select an option" />
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              {options.map((option, index) => (
                <SelectItem key={index} value={option}>
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  )
}

export default ContactEntrySelectField
