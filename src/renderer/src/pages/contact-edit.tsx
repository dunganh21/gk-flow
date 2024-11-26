import { useNavigate, useParams } from 'react-router-dom'
import { ContactFormDef } from '../components/contact/contact-def-form/contact-form-def'
import PageLayout from '../components/ui/page-layout'
import AddFieldDialog from '../components/contact/add-field-dialog'

const ContactDef = () => {
  const { id } = useParams() as { id: string }
  const navigate = useNavigate()

  return (
    <PageLayout
      title="Contact Definition"
      breadcrumbs={{ label: 'Contact', onClick: () => navigate('/contact') }}
    >
      <ContactFormDef id={id} />
      <AddFieldDialog />
    </PageLayout>
  )
}

export default ContactDef
