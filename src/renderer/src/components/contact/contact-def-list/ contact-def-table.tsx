import {
  Button,
  Card,
  Loading,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@components/ui'
import { Pencil, Trash2 } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import EmptyContact from '../empty-contact'
import { useContactDefList, useContactDelete } from './contact-def.hook'

export function ContactDefTable() {
  const { result, isFetching } = useContactDefList()
  console.log('[DEBUG] / ContactDefTable / result:', result)

  const { deleteContactDef } = useContactDelete()
  const navigate = useNavigate()

  const addFormDefinition = () => {
    navigate('/contact/create')
  }

  if (isFetching) {
    return (
      <div className="flex justify-center items-center p-4">
        <Loading size="lg" />
      </div>
    )
  }

  return result.length === 0 ? (
    <EmptyContact onCreateNew={addFormDefinition} />
  ) : (
    <Card className="p-2">
      <Table>
        <TableCaption>Danh sách các loại contact. Ví dụ: hãng tàu, hãng xe, ...</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Field quantity</TableHead>
            {/* <TableHead className="text-right">Contact number</TableHead> */}
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {result.map((contactDef) => (
            <TableRow
              key={contactDef.id}
              onClick={() => navigate(`/contact/${contactDef.id}/entries`)}
              className="cursor-pointer"
            >
              <TableCell className="font-medium">{contactDef.name}</TableCell>
              <TableCell>{contactDef.description}</TableCell>
              <TableCell className="max-w-3 text-right">{contactDef.fields.length}</TableCell>
              {/* <TableCell className="max-w-3 text-right">1</TableCell> */}
              <TableCell className="max-w-3 text-right">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/contact/${contactDef.id}`)
                  }}
                  className="mr-2"
                >
                  <Pencil className="h-4 w-4" />
                </Button>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    deleteContactDef(contactDef.id)
                  }}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    </Card>
  )
}
