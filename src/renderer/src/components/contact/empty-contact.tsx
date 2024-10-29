import React from 'react'
import { Button } from '@components/ui/button'
import { UserPlus } from 'lucide-react'

interface EmptyContactProps {
  onCreateNew: () => void
}

const EmptyContact: React.FC<EmptyContactProps> = ({ onCreateNew }) => {
  console.log('run this')

  return (
    <div className="text-center py-10">
      <UserPlus className="mx-auto h-12 w-12 text-gray-400" />
      <h3 className="mt-2 text-sm font-semibold text-gray-900">No contacts</h3>
      <p className="mt-1 text-sm text-gray-500">Get started by creating a new contact.</p>
      <div className="mt-6">
        <Button onClick={onCreateNew}>Create New Form Definition</Button>
      </div>
    </div>
  )
}

export default EmptyContact
