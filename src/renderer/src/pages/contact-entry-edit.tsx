import { useNavigate, useParams } from 'react-router-dom'
import { ContactEntryEdit } from '../components/contact/contact-entry'
import PageLayout from '../components/ui/page-layout'

export function ContactEntryEditPage() {
  const { id: contactDefId } = useParams() as { id: string; entryId: string }
  const navigate = useNavigate()

  return (
    <PageLayout
      title="Contact entry edit"
      breadcrumbs={{
        label: 'Contact',
        onClick: () => navigate(`/contact/${contactDefId}/entries`)
      }}
    >
      <ContactEntryEdit />
    </PageLayout>
  )
}
