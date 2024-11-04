import { Checkbox, Label } from '@renderer/components/ui'
import { useContactDefStorage } from '@renderer/storage/contact-field'
import { ContactDefField, ContactDefFieldNumber, ContactDefTextField } from '@shared/types/contact'

const AllowFieldList = () => {
  const { currentField, editCurrentField } = useContactDefStorage()
  const { field } = currentField as { field: ContactDefField }

  return ['text', 'number'].includes(field.type) ? (
    <div className="flex items-center gap-2">
      <Checkbox
        id="allow-list"
        checked={(field as ContactDefTextField | ContactDefFieldNumber).allowList}
        onCheckedChange={(checked) =>
          editCurrentField({ ...field, allowList: checked as boolean } as ContactDefField)
        }
      />
      <Label htmlFor="allow-list">Allow List</Label>
    </div>
  ) : null
}

export default AllowFieldList
