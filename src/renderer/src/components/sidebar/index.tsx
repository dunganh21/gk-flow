import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@lib/utils'
import { Button } from '@components/ui/button'
import { HomeIcon, FileTextIcon, ExitIcon, PersonIcon } from '@radix-ui/react-icons'

const sidebarItems = [
  { icon: HomeIcon, label: 'Dashboard', route: '/' },
  { icon: FileTextIcon, label: 'Mail template', route: '/template' },
  { icon: PersonIcon, label: 'Contact', route: '/contact' }
]

const Sidebar: React.FC = () => {
  const location = useLocation()

  return (
    <div className="flex flex-col h-screen w-48 bg-background border-r border-border fixed left-0 top-0">
      <div className="p-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full" />
          <span className="text-lg font-semibold">Logo</span>
        </div>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => (
            <li key={item.route}>
              <Link to={item.route}>
                <Button
                  variant="ghost"
                  className={cn(
                    'w-full justify-start',
                    location.pathname === item.route && 'bg-accent'
                  )}
                >
                  <item.icon className="mr-2 h-4 w-4" />
                  {item.label}
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4">
        <Button variant="ghost" className="w-full justify-start">
          <ExitIcon className="mr-2 h-4 w-4" />
          Log Out
        </Button>
      </div>
    </div>
  )
}

export default Sidebar
