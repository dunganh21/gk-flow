'use client'

import { Input } from './input'
import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { cn } from '../../lib/utils'
import { Button } from './button'
import { Calendar } from './calendar'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

export type DateTimePickerProps = {
  date: Date
  setDate: (date: Date) => void
  timeAllow?: boolean
}

export function DatePickerDemo({ date, setDate, timeAllow = false }: DateTimePickerProps) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={'outline'}
          className={cn(
            'w-[280px] justify-start text-left font-normal',
            !date && 'text-muted-foreground'
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? (
            format(date, timeAllow ? 'PPP HH:mm' : 'PPP')
          ) : (
            <span>Pick a date{timeAllow ? ' and time' : ''}</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
        {timeAllow && (
          <div className="border-t border-border p-3 space-y-2">
            <div className="flex items-center justify-center">
              <Input
                type="time"
                value={format(date || new Date(), 'HH:mm')}
                onChange={(e) => {
                  const [hours, minutes] = e.target.value.split(':')
                  const newDate = new Date(date || new Date())
                  newDate.setHours(parseInt(hours))
                  newDate.setMinutes(parseInt(minutes))
                  setDate(newDate)
                }}
                className="w-[120px]"
              />
            </div>
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}
