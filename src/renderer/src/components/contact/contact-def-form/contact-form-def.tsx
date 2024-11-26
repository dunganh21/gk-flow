import { ContactDefField } from '@/shared/types/contact'
import { Button, Input, Textarea } from '@renderer/components/ui'
import { uid } from '@renderer/lib/uid'
import { useAddFieldDialogState, useContactDefStorage } from '@renderer/storage/contact-field'
import { Loading } from '../../ui/loading'
import { toast } from '../../ui/toast/use-toast'
import { useContactFormDef, useContactFormDefActions } from './contact-form-def.hook'
import FieldCard from './field-card'
import { useEffect } from 'react'

interface ContactFormDefProps {
  id: string
}

export function ContactFormDef({ id }: ContactFormDefProps) {
  const { isFetching } = useContactFormDef(id)
  const { onSaveFormDef } = useContactFormDefActions()

  const contactDef = useContactDefStorage((state) => state.contactDef)
  const { resetContactDef } = useContactDefStorage.getState()
  const { setContactDef, setCurrentField, deleteField } = useContactDefStorage.getState()
  const { toggleOpen: openAddFieldDialog } = useAddFieldDialogState.getState()

  useEffect(() => {
    return () => {
      resetContactDef()
    }
  }, [])

  const upsertField = (position: number | 'new', field: ContactDefField) => {
    setCurrentField(position, field)
    openAddFieldDialog()
  }

  if (isFetching) {
    return <Loading />
  }

  return (
    <div className="p-4">
      <div className="space-y-6">
        <Input
          label="Name"
          placeholder="Examples: Cart upsell, Fabric colors, Product bundle"
          value={contactDef.name}
          onChange={(e) => setContactDef({ ...contactDef, name: e.target.value })}
          maxLength={255}
          required
          onError={() =>
            toast({
              title: 'Name is required',
              description: 'Please enter a name for your contact form'
            })
          }
        />

        <Textarea
          label="Description"
          value={contactDef.description}
          onChange={(e) => setContactDef({ ...contactDef, description: e.target.value })}
        />
      </div>
      <h2 className="text-xl font-bold mt-8 mb-4">Fields</h2>
      <div className="space-y-4">
        {contactDef.fields.map((field, index) => (
          <FieldCard
            key={field.key}
            fieldData={field}
            onDelete={() => deleteField(index)}
            onEdit={() => upsertField(index, field)}
          />
        ))}

        <Button
          type="button"
          variant="ghost"
          className="flex items-center gap-2 text-primary hover:bg-primary/10"
          onClick={() =>
            upsertField('new', {
              key: uid(),
              name: '',
              description: '',
              isRequired: false,
              type: 'text'
            })
          }
        >
          <span className="text-xl">+</span> Add field
        </Button>
      </div>
      <div className="flex justify-end mt-4">
        <Button type="submit" onClick={onSaveFormDef}>
          Save
        </Button>
      </div>
    </div>
  )
}
