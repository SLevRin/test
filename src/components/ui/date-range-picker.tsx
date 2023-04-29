'use client'

import { format } from 'date-fns'
import { Calendar as CalendarIcon } from 'lucide-react'
import * as React from 'react'
import { type DateRange } from 'react-day-picker'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { cn } from '@/lib/utils'

export function DateRangePicker() {
  const [date, setDate] = React.useState<DateRange>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          id="date"
          variant={'outline'}
          className={cn('w-[280px] justify-start', { 'text-muted-foreground': !date })}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date?.from && date?.to ? (
            <>
              {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
            </>
          ) : (
            <span>Pick a date</span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          initialFocus
          mode="range"
          defaultMonth={date?.from}
          numberOfMonths={2}
          selected={date}
          onSelect={setDate}
        />
      </PopoverContent>
    </Popover>
  )
}
