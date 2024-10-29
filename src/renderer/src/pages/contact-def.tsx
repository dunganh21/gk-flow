import { useNavigate } from 'react-router-dom'
import { ContactFormDef } from '../components/contact/contact-form-def'
import PageLayout from '../components/ui/page-layout'
import AddFieldDialog from '../components/contact/add-field-dialog'

const ContactDef = () => {
  const navigate = useNavigate()

  return (
    <PageLayout
      title="Contact Definition"
      breadcrumbs={{ label: 'Contact', onClick: () => navigate('/contact') }}
    >
      <ContactFormDef />
      <AddFieldDialog />
    </PageLayout>
  )
}

export default ContactDef
