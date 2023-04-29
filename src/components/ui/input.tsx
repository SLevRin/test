import * as React from 'react'

import { cn } from '@/lib/utils'

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        'inline-flex h-10 w-full rounded-md border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
