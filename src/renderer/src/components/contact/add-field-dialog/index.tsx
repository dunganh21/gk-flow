import { ContactDefField } from '@/shared/types/contact'
import {
  Button,
  Checkbox,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Textarea
} from '@renderer/components/ui'
import { FIELD_TYPES } from '@renderer/constants/select'
import { useAddFieldDialogState, useContactDefStorage } from '@renderer/storage/contact-field'
import AllowFieldList from './allow-list-field'

const AddFieldDialog = () => {
  const { isOpen, toggleOpen } = useAddFieldDialogState()
  const { currentField, editCurrentField, setField } = useContactDefStorage()

  if (!currentField) return null
  const { field, position } = currentField as { field: ContactDefField; position: number | 'new' }

  const handleUpsertField = () => {
    setField(position, field)
    toggleOpen()
  }

  return (
    <Dialog open={isOpen} onOpenChange={toggleOpen} modal>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New field</DialogTitle>
        </DialogHeader>
        <DialogDescription>Add a new field to the contact definition</DialogDescription>

        <div className="flex flex-col gap-4 py-4">
          <Input
            label="Name"
            value={field.name}
            onChange={(e) => editCurrentField({ ...field, name: e.target.value })}
          />

          <Textarea
            label="Description"
            value={field.description}
            onChange={(e) => editCurrentField({ ...field, description: e.target.value })}
          />

          <Select
            onValueChange={(value) =>
              editCurrentField({ ...field, type: value } as ContactDefField)
            }
            value={field.type}
            label="Field type"
          >
            <SelectTrigger>
              <SelectValue placeholder="Select field type" />
            </SelectTrigger>
            <SelectContent>
              {FIELD_TYPES.map(({ label, value }) => (
                <SelectItem key={value} value={value}>
                  {label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <div className="flex items-center gap-2">
            <Checkbox
              id="required"
              checked={field.isRequired}
              onCheckedChange={(checked) =>
                editCurrentField({ ...field, isRequired: checked as boolean })
              }
            />
            <Label htmlFor="required">Required</Label>
          </div>
          <AllowFieldList />
        </div>

        <DialogFooter>
          <Button onClick={handleUpsertField}>Add Field</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AddFieldDialog
