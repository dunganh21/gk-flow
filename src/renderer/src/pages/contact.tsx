import { Button } from '@components/ui/button'
import React from 'react'
// New imports for DataTable
import EmptyContact from '@components/contact/empty-contact'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/ui/table'
import { ColumnDef, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import { useNavigate } from 'react-router-dom'
import PageLayout from '../components/ui/page-layout'

interface FormDefinition {
  id: number
  name: string
  description: string
}

const DEFAULT_DATA: FormDefinition[] = []

const Contact: React.FC = () => {
  const navigate = useNavigate()

  const addFormDefinition = () => {
    navigate('/contact-def')
  }

  const editFormDefinition = (id: number) => {
    console.log('[DEBUG] / editFormDefinition / id:', id)
    // ... Edit form definition logic
  }

  const deleteFormDefinition = (id: number) => {
    console.log('[DEBUG] / deleteFormDefinition / id:', id)
    // ... Delete form definition logic
  }

  // Define columns for DataTable
  const columns: ColumnDef<FormDefinition>[] = [
    {
      accessorKey: 'name',
      header: 'Name'
    },
    {
      accessorKey: 'description',
      header: 'Description'
    },
    {
      id: 'actions',
      cell: ({ row }) => (
        <>
          <Button
            variant="outline"
            className="mr-2"
            onClick={() => editFormDefinition(row.original.id)}
          >
            Edit
          </Button>
          <Button variant="destructive" onClick={() => deleteFormDefinition(row.original.id)}>
            Delete
          </Button>
        </>
      )
    }
  ]

  const table = useReactTable({
    data: DEFAULT_DATA,
    columns,
    getCoreRowModel: getCoreRowModel()
  })

  return (
    <PageLayout
      title="Contact"
      action={{ label: 'Create contact definition', onClick: addFormDefinition }}
    >
      {DEFAULT_DATA.length === 0 ? (
        <EmptyContact onCreateNew={addFormDefinition} />
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.map((row) => (
              <TableRow key={row.original.id}>
                <TableCell>{row.original.name}</TableCell>
                <TableCell>{row.original.description}</TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    className="mr-2"
                    onClick={() => editFormDefinition(row.original.id)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="destructive"
                    onClick={() => deleteFormDefinition(row.original.id)}
                  >
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </PageLayout>
  )
}

export default Contact
