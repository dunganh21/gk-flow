'use client'
import { useNavigate, useParams } from 'react-router-dom'
import ContactEntry from '../components/contact-entries/list/ index'
import PageLayout from '../components/ui/page-layout'

export default function ContactEntryPage() {
  const navigate = useNavigate()
  const { id: contactDefId } = useParams() as { id: string }

  return (
    <PageLayout
      title="Contact entries"
      breadcrumbs={{ label: 'Contact', onClick: () => navigate('/contact') }}
      action={{
        label: 'Add contact',
        onClick: () => navigate(`/contact/${contactDefId}/entries/new`)
      }}
    >
      <ContactEntry />
    </PageLayout>
  )
}
