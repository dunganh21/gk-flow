import { ContactDefFieldCheckbox } from '@/shared/types/contact'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { Checkbox } from '@components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui'
import { FormDescription } from '../../ui/form'

interface CheckboxFieldProps {
  form: UseFormReturn<FieldValues>
  fieldDef: ContactDefFieldCheckbox
}

const ContactEntryCheckboxField = ({ form, fieldDef }: CheckboxFieldProps) => {
  const { key, name, description } = fieldDef

  return (
    <FormField
      control={form.control}
      name={key}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <div className="grid gap-2">
            <FormItem className="flex flex-row items-center space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel className="font-normal">{name}</FormLabel>
            </FormItem>
          </div>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  )
}

export default ContactEntryCheckboxField
