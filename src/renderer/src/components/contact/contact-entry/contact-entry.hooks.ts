import { ContactDefField, ContactDef } from '@/shared/types/contact'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
    return isRequired
      ? z.array(z.string()).min(1, 'At least one option must be selected')
      : z.array(z.string())
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

export const sampleContactDef: ContactDef = {
  id: 'shipping-agent',
  name: 'Shipping Agent',
  description: 'Contact information for shipping agents',
  fields: [
    {
      type: 'text',
      key: 'companyName',
      name: 'Company Name',
      description: 'Name of the shipping company',
      isRequired: true,
      allowList: true
    },
    {
      type: 'email',
      key: 'email',
      name: 'Email Address',
      description: 'Primary email contact',
      isRequired: true,
      allowList: true
    },
    {
      type: 'number',
      key: 'employeeCount',
      name: 'Number of Employees',
      description: 'Total number of employees',
      isRequired: false,
      allowList: false
    },
    {
      type: 'checkbox',
      key: 'service',
      name: 'Services Offered',
      description: 'Available shipping services',
      isRequired: true
    },
    {
      type: 'checkboxes',
      key: 'services',
      name: 'Services Offered',
      description: 'Available shipping services',
      isRequired: true,
      options: [
        { label: 'Air Freight', value: 'air' },
        { label: 'Sea Freight', value: 'sea' },
        { label: 'Land Transport', value: 'land' }
      ]
    },
    {
      type: 'date',
      key: 'establishedDate',
      name: 'Established Date',
      description: 'Company establishment date',
      isRequired: false
    }
  ]
}

export const useContactEntryForm = (sampleContactDef: ContactDef) => {
  const contactEntrySchema = sampleContactDef.fields.reduce(
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

  const defaultContactEntry = sampleContactDef.fields.reduce((acc, field) => {
    const value = getDefaultFormEntry(field)
    if (value !== null) {
      acc[field.key] = value
    }
    return acc
  }, {})

  type ContactDefFormValues = z.infer<typeof zodSchema>

  const form = useForm<ContactDefFormValues>({
    resolver: zodResolver(zodSchema),
    defaultValues: defaultContactEntry
  })

  return {
    form,
    contactEntrySchema,
    defaultContactEntry
  }
}
