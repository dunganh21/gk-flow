import * as React from 'react'
import { cn } from '@renderer/lib/utils'

interface LoadingProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg'
}

const Loading = React.forwardRef<HTMLDivElement, LoadingProps>(
  ({ className, size = 'md', ...props }, ref) => {
    const sizeClasses = {
      sm: 'w-6 h-6',
      md: 'w-12 h-12',
      lg: 'w-16 h-16'
    }

    return (
      <div
        ref={ref}
        className={cn(sizeClasses[size], className, 'bg-no-repeat')}
        style={{
          backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 150"><path fill="none" stroke="%23FF156D" stroke-width="21" stroke-linecap="round" stroke-dasharray="300 385" stroke-dashoffset="0" d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"><animate attributeName="stroke-dashoffset" calcMode="spline" dur="2.8" values="685;-685" keySplines="0 0 1 1" repeatCount="indefinite"></animate></path></svg>')`
        }}
        {...props}
      />
    )
  }
)

Loading.displayName = 'Loading'

export { Loading }
