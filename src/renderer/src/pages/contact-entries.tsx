'use client'
import { useNavigate } from 'react-router-dom'
import ContactEntry from '../components/contact-entries/list/ index'
import PageLayout from '../components/ui/page-layout'

export default function ContactEntryPage() {
  const navigate = useNavigate()
  return (
    <PageLayout
      title="Contact entries"
      breadcrumbs={{ label: 'Contact', onClick: () => navigate('/contact') }}
    >
      <ContactEntry />
    </PageLayout>
  )
}
