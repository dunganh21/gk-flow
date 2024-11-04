import {
  Card,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@components/ui'
import { CONTACT_DEF_DATA } from '../../data/contact-def.data'
import { useNavigate } from 'react-router-dom'

export function ContactDefTable() {
  const navigate = useNavigate()

  return (
    <Card className="p-2">
      <Table>
        <TableCaption>Danh sách các loại contact. Ví dụ: hãng tàu, hãng xe, ...</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Field quantity</TableHead>
            <TableHead className="text-right">Contact number</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {CONTACT_DEF_DATA.map((contactDef) => (
            <TableRow
              key={contactDef.id}
              onClick={() => navigate(`/contact/${contactDef.id}/entries`)}
              className="cursor-pointer"
            >
              <TableCell className="font-medium">{contactDef.name}</TableCell>
              <TableCell>{contactDef.description}</TableCell>
              <TableCell className="max-w-3 text-right">{contactDef.fields.length}</TableCell>
              <TableCell className="max-w-3 text-right">1</TableCell>
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
