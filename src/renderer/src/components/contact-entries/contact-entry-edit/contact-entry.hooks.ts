import { uid } from '@/renderer/src/lib/uid'
import { ContactDef, ContactDefField, ContactEntry } from '@/shared/types/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { useRxCollection, useRxData } from 'rxdb-hooks'
import { z } from 'zod'
import { toast } from '../../ui/toast/use-toast'

const createFormSchemaValue = (fields: ContactDefField) => {
  const { type, isRequired } = fields

  if (type === 'text') {
    if (fields.allowList) {
      return isRequired
        ? z.array(z.string()).min(1, 'At least one text value is required')
        : z.array(z.string())
    }
    return isRequired ? z.string().min(1, 'Text is required') : z.string()
  }

  if (type === 'email') {
    // Create base email validation schema
    const emailSchema = z
      .string()
      .email('Invalid email format')
      .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, 'Invalid email format')

    // Handle array of emails if allowList is true
    if (fields.allowList) {
      const emailArraySchema = z.array(emailSchema)
      return isRequired
        ? emailArraySchema.min(1, 'At least one email is required')
        : emailArraySchema
    }

    // Handle single email
    return isRequired ? emailSchema : emailSchema.optional()
  }

  if (type === 'number') {
    if (fields.allowList) {
      return isRequired
        ? z.array(z.number()).min(1, 'At least one number is required')
        : z.array(z.number())
    }
    return isRequired ? z.number().min(1, 'Number must be greater than 0') : z.number()
  }

  if (type === 'select') {
    return isRequired ? z.string().min(1, 'An option must be selected') : z.string()
  }

  if (type === 'checkboxes') {
    return isRequired
      ? z.array(z.string()).min(1, 'At least one option must be selected')
      : z.array(z.string())
  }

  if (type === 'checkbox') {
    return isRequired
      ? z.boolean({ required_error: 'This field is required' })
      : z.boolean().optional()
  }

  if (type === 'date') {
    return isRequired ? z.string().min(1, 'Date is required') : z.string()
  }

  return null
}

const getDefaultFormEntry = (fields: ContactDefField) => {
  const { type } = fields

  if ('allowList' in fields && fields.allowList) {
    return []
  } else if (type === 'checkboxes' || type === 'select') {
    return []
  } else if (type === 'text' || type === 'email' || type === 'date') {
    return ''
  } else if (type === 'number') {
    return 0
  } else if (type === 'checkbox') {
    return false
  }
  return null
}

export const useContactEntryForm = (contactDefId: string, entryId: string) => {
  const contactDefQueryConstructor = useCallback(
    (collection) => collection.findOne({ selector: { id: contactDefId } }),
    [contactDefId]
  )
  const contactEntryQueryConstructor = useCallback(
    (collection) => collection.findOne({ selector: { id: entryId } }),
    [entryId]
  )

  const { result: contactDefResult } = useRxData<ContactDef>(
    'contact-defs',
    contactDefQueryConstructor
  )
  const contactDef = contactDefResult?.[0]
  const { result: entryResult } = useRxData<ContactEntry>('contacts', contactEntryQueryConstructor)

  if (!contactDef) {
    const emptyForm = useForm({
      defaultValues: {}
    })
    return {
      form: emptyForm,
      contactDef: null
    }
  }

  const contactEntrySchema = contactDef.fields.reduce(
    (acc, field) => {
      const schema = createFormSchemaValue(field)
      if (schema) {
        acc[field.key] = schema
      }
      return acc
    },
    {} as Record<string, z.ZodType>
  )
  const zodSchema = z.object(contactEntrySchema)

  type ContactDefFormValues = z.infer<typeof zodSchema>

  const form = useForm<ContactDefFormValues>({
    resolver: zodResolver(zodSchema),
    defaultValues: async () => {
      const initialValues = contactDef.fields.reduce((acc, field) => {
        const value = getDefaultFormEntry(field)
        if (value !== null) {
          acc[field.key] = value
        }
        return acc
      }, {} as ContactEntry)
      return initialValues
    }
  })

  return {
    form,
    contactDef,
    entry: entryResult?.[0]
  }
}

export const useContactActions = () => {
  const collection = useRxCollection<ContactEntry>('contacts')

  const onSaveContact = async (data: ContactEntry, contactDefId: string, contactId: string) => {
    if (contactId === 'new') {
      await collection?.insert({
        id: uid(),
        contactDefId,
        data
      })
    } else {
      await collection?.findOne({ selector: { id: contactId } }).update({
        $set: {
          data
        }
      })
    }

    toast({
      title: 'Contact form saved',
      description: 'Your contact form has been saved successfully'
    })
  }

  return {
    onSaveContact
  }
}
