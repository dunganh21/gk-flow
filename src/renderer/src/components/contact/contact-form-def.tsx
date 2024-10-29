import { ContactDefField } from '@/shared/types/contact'
import { Button, Card, Input, Textarea } from '@renderer/components/ui'
import { uid } from '@renderer/lib/uid'
import { useAddFieldDialogState, useContactDefStorage } from '@renderer/storage/contact-field'

export function ContactFormDef() {
  const contactDef = useContactDefStorage((state) => state.contactDef)
  const { setContactDef, setCurrentField } = useContactDefStorage.getState()
  const { toggleOpen: openAddFieldDialog } = useAddFieldDialogState.getState()

  const upsertField = (position: number | 'new', field: ContactDefField) => {
    setCurrentField(position, field)
    openAddFieldDialog()
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
          <Card
            key={index}
            className="flex items-center justify-between p-4 hover:bg-muted cursor-pointer"
            onClick={() => upsertField(index, field)}
          >
            <div className="flex items-center gap-4">
              {/* <span className="bg-muted p-2 rounded">A</span> */}
              <div>
                <div>{field.name}</div>
                <div className="text-sm text-muted-foreground">.{field.name.toLowerCase()}</div>
              </div>
            </div>
          </Card>
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
    </div>
  )
}
