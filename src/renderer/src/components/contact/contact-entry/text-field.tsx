import {
  ContactDefFieldEmail,
  ContactDefFieldNumber,
  ContactDefTextField
} from '@/shared/types/contact'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { FormControl, FormField, FormItem, FormLabel, FormMessage, Input } from '../../ui'
import { FormDescription } from '../../ui/form'
import { ListField } from './list-field'

interface TextFieldProps {
  form: UseFormReturn<FieldValues>
  fieldDef: ContactDefTextField | ContactDefFieldEmail | ContactDefFieldNumber
}

const ContactEntryTextField = ({ form, fieldDef }: TextFieldProps) => {
  const { key, name, description, allowList, type, isRequired } = fieldDef

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'number') {
      return e.target.value === '' ? 0 : Number(e.target.value)
    }

    return e.target.value
  }

  return (
    <FormField
      control={form.control}
      name={key}
      render={({ field }) => (
        <FormItem>
          <FormLabel required={isRequired}>{name}</FormLabel>
          <FormControl>
            {allowList ? (
              <ListField {...field} />
            ) : (
              <Input
                {...field}
                type={type}
                required={isRequired}
                onChange={(e) => field.onChange(handleChange(e))}
              />
            )}
          </FormControl>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  )
}

export default ContactEntryTextField
