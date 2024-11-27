import { ContactDefFieldCheckboxes } from '@/shared/types/contact'
import { FieldValues, UseFormReturn } from 'react-hook-form'
import { Checkbox } from '@components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui'
import { FormDescription } from '../../ui/form'

interface CheckboxesFieldProps {
  form: UseFormReturn<FieldValues>
  fieldDef: ContactDefFieldCheckboxes
}

const ContactEntryCheckboxesField = ({ form, fieldDef }: CheckboxesFieldProps) => {
  const { key, name, description, options } = fieldDef

  return (
    <FormField
      control={form.control}
      name={key}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{name}</FormLabel>
          <div className="grid gap-2">
            {options.map((option) => (
              <FormItem
                key={option.value}
                className="flex flex-row items-center space-x-3 space-y-0"
              >
                <FormControl>
                  <Checkbox
                    checked={field.value?.includes(option.value)}
                    onCheckedChange={(checked) => {
                      const currentValue = field.value || []
                      if (checked) {
                        field.onChange([...currentValue, option.value])
                      } else {
                        field.onChange(
                          currentValue.filter((value: string) => value !== option.value)
                        )
                      }
                    }}
                  />
                </FormControl>
                <FormLabel className="font-normal">{option.label}</FormLabel>
              </FormItem>
            ))}
          </div>
          <FormMessage />
          {description && <FormDescription>{description}</FormDescription>}
        </FormItem>
      )}
    />
  )
}

export default ContactEntryCheckboxesField
