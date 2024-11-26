'use client '
import { ContactDefField, ContactEntry } from '@/shared/types/contact'
import { Button, Form } from '@components/ui'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ErrorCard from '../../error-card'
import ContactEntryCheckboxField from './checkbox'
import ContactEntryCheckboxesField from './checkboxes'
import { useContactActions, useContactEntryForm } from './contact-entry.hooks'
import ContactEntryDateTimeField from './date-time-field'
import ContactEntrySelectField from './select'
import ContactEntryTextField from './text-field'

export function ContactEntryEdit() {
  const { id: contactDefId, entryId } = useParams() as { id: string; entryId: string }
  const { form, contactDef, entry } = useContactEntryForm(contactDefId, entryId)
  const { onSaveContact: onSaveFormDef } = useContactActions()

  useEffect(() => {
    if (entry?.data) {
      Object.entries(entry.data).forEach(([key, value]) => {
        form.setValue(key, value)
      })
    }
  }, [entry?.data])

  if (!form || !contactDef) {
    return <ErrorCard />
  }

  const renderField = (field: ContactDefField) => {
    switch (field.type) {
      case 'text':
      case 'email':
      case 'number':
        return <ContactEntryTextField form={form} fieldDef={field} key={field.key} />
      case 'select':
        return <ContactEntrySelectField form={form} fieldDef={field} key={field.key} />

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
          onSaveFormDef(data as ContactEntry, contactDefId, entryId)
        })}
        className="space-y-8"
      >
        {contactDef.fields.map(renderField)}
        <Button type="submit">Save contact entry</Button>
      </form>
    </Form>
  )
}
