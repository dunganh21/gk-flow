import { ContactDefField, ContactDefTextField } from '@shared/types/contact'
import { Button, Card } from '../ui'
import { TrashIcon } from '@radix-ui/react-icons'

interface FieldCardProps {
  fieldData: ContactDefField
  onDelete: () => void
  onEdit: () => void
}

const FieldCard = ({ fieldData, onDelete, onEdit }: FieldCardProps) => {
  return (
    <Card
      key={fieldData.key}
      className="flex items-center justify-between p-4 hover:bg-muted cursor-pointer"
      onClick={onEdit}
    >
      <div className="flex items-center gap-4">
        <div>
          <div>
            {fieldData.name} {fieldData.isRequired && <span className="text-red-500">*</span>}
          </div>
          <div className="text-xs text-muted-foreground">
            {fieldData.type.toUpperCase()}
            {(fieldData as ContactDefTextField).allowList && '-LIST'}
          </div>
        </div>
      </div>
      <Button
        variant="destructive"
        size="icon"
        onClick={(e) => {
          e.stopPropagation()
          onDelete()
        }}
      >
        <TrashIcon className="w-4 h-4" />
      </Button>
    </Card>
  )
}

export default FieldCard
