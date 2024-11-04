import { Button, Input, InputProps, Popover, PopoverContent, PopoverTrigger } from '@components/ui'
import { Cross1Icon, PlusIcon } from '@radix-ui/react-icons'
import { useState } from 'react'

interface ListFieldProps extends Omit<InputProps, 'onChange'> {
  value: string[]
  onChange: (value: string[]) => void
}

export const ListField: React.FC<ListFieldProps> = ({
  value = [],
  onChange,
  ...textFieldProps
}: ListFieldProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<string[]>([])

  const handleOpen = (open: boolean) => {
    if (open) {
      setItems(value)
      setIsOpen(open)
    } else {
      onChange(items.filter(Boolean).map((item) => item.trim()))
      setIsOpen(open)
    }
  }

  const handleChangeItem = (index: number, newValue: string) => {
    const newItems = items.map((item, i) => (i === index ? newValue : item))
    setItems(newItems)
  }

  const handleAdd = () => {
    setItems([...items, ''])
  }

  const handleClearAll = () => {
    setItems([])
  }

  const handleRemove = (index: number) => {
    setItems(items.filter((_, i) => i !== index))
  }

  return (
    <Popover open={isOpen} onOpenChange={handleOpen}>
      <PopoverTrigger asChild>
        <div>
          <Input
            readOnly
            value={value.filter((item) => item.trim() !== '').join(', ')}
            {...textFieldProps}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="font-medium leading-none">{textFieldProps.label || 'List'}</h4>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClearAll}
              className="h-auto p-0 text-muted-foreground hover:text-destructive"
            >
              Clear all
            </Button>
          </div>

          <div className="max-h-[300px] overflow-y-auto space-y-4">
            {items.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-[1px]">
                <Input
                  value={item}
                  placeholder="Enter value"
                  className="flex-1 border border-input"
                  onChange={(e) => handleChangeItem(index, e.target.value)}
                />
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemove(index)}
                  className="h-9 w-9"
                >
                  <Cross1Icon className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {items.length === 0 && (
              <div className="py-2 px-2 text-sm text-muted-foreground text-center">
                No items added
              </div>
            )}
          </div>

          <Button onClick={handleAdd} variant="outline" className="w-full" size="sm">
            <PlusIcon className="h-4 w-4 mr-2" />
            Add item
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
