import React from 'react'
import { Button, ButtonProps } from './button'
import { ArrowLeft } from 'lucide-react'

type Action = Omit<ButtonProps, 'children'> & { label: string }
interface PageLayoutProps {
  title: string
  children: React.ReactNode
  breadcrumbs?: React.ReactNode | Action
  action?: React.ReactNode | Action
  secondaryActions?: React.ReactNode | Action[]
}

const PageLayout: React.FC<PageLayoutProps> = ({
  title,
  children,
  breadcrumbs,
  action,
  secondaryActions = []
}) => {
  return (
    <div className="w-full">
      <header className="flex items-center justify-between pb-2">
        <div className="flex items-center space-x-2">
          {breadcrumbs && (
            <Button variant="ghost" onClick={(breadcrumbs as ButtonProps).onClick} size="icon">
              <ArrowLeft className="w-4 h-4" />
            </Button>
          )}
          <h1 className="text-2xl font-bold">{title}</h1>
        </div>
        <div className="flex space-x-2">
          {action &&
            (React.isValidElement(action) ? (
              action
            ) : (
              <Button onClick={(action as Action).onClick}>{(action as Action).label}</Button>
            ))}
          {secondaryActions && Array.isArray(secondaryActions)
            ? secondaryActions.map((action, index) => (
                <Button key={index} variant="outline" onClick={action.onClick}>
                  {action.label}
                </Button>
              ))
            : secondaryActions}
        </div>
      </header>
      <main className="pt-6">{children}</main>
    </div>
  )
}

export default PageLayout
