import { Button, Input } from '@/renderer/src/components/ui'
import { useContactDefStorage } from '@/renderer/src/storage/contact-field'
import { ContactDefFieldSelect } from '@/shared/types/contact'

import { TrashIcon } from '@radix-ui/react-icons'

export const SelectPreset = () => {
  const { currentField, editCurrentField } = useContactDefStorage()
  const { field } = currentField as { field: ContactDefFieldSelect }

  const handleAddChoice = () => {
    if (!field.options) {
      editCurrentField({ ...field, options: [''] })
    }
    editCurrentField({ ...field, options: [...field.options, ''] })
  }

  const handleEditChoice = (index: number, newValue: string) => {
    const updatedChoices = field.options.map((choice, i) => (i === index ? newValue : choice))
    editCurrentField({ ...field, options: updatedChoices })
  }

  const handleDeleteChoice = (index: number) => {
    const filteredChoices = field.options.filter((_, i) => i !== index)
    editCurrentField({ ...field, options: filteredChoices })
  }

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        {(field.options || []).map((choice, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              value={choice}
              onChange={(e) => handleEditChoice(index, e.target.value)}
              className="flex-1"
              placeholder="Enter choice value"
              onBlur={(e) => handleEditChoice(index, e.target.value.trim())}
            />
            <Button size="icon" variant="ghost" onClick={() => handleDeleteChoice(index)}>
              <TrashIcon className="h-4 w-4 text-destructive" />
            </Button>
          </div>
        ))}
      </div>

      <Button onClick={handleAddChoice} variant="outline">
        Add item
      </Button>
    </div>
  )
}
