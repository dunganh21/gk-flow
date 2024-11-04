'use client '
import { ContactDefField } from '@/shared/types/contact'
import { Button, Form } from '@components/ui'
import * as z from 'zod'
import ContactEntryCheckboxField from './checkbox'
import { sampleContactDef, useContactEntryForm } from './contact-entry.hooks'
import ContactEntryDateTimeField from './date-time-field'
import ContactEntryTextField from './text-field'
import ContactEntryCheckboxesField from './checkboxes'

export function ContactEntryEdit() {
  const { form } = useContactEntryForm(sampleContactDef)

  const renderField = (field: ContactDefField) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return <ContactEntryTextField form={form} fieldDef={field} key={field.key} />

      case 'select':
        return <div>Chưa có fied này</div>

      case 'checkbox':
        return <ContactEntryCheckboxField form={form} fieldDef={field} key={field.key} />

      case 'checkboxes':
        return <ContactEntryCheckboxesField form={form} fieldDef={field} key={field.key} />

      case 'date':
        return <ContactEntryDateTimeField form={form} fieldDef={field} key={field.key} />
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => {
          try {
            console.log('run this abc', data)

            // Handle successful validation
          } catch (error) {
            if (error instanceof z.ZodError) {
              console.log('validation errors:', error.errors)
            }
          }
        })}
        className="space-y-8"
      >
        {sampleContactDef.fields.map(renderField)}
        <Button type="submit">Save contact entry</Button>
      </form>
    </Form>
  )
}
