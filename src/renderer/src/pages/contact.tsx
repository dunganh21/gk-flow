import React from 'react'
import { useNavigate } from 'react-router-dom'
import { ContactDefTable } from '../components/contact/contact-def-list/ contact-def-table'
import PageLayout from '../components/ui/page-layout'

const Contact: React.FC = () => {
  const navigate = useNavigate()

  const addFormDefinition = () => {
    navigate('/contact/create')
  }

  return (
    <PageLayout
      title="Contact"
      action={{ label: 'Create contact definition', onClick: addFormDefinition }}
    >
      <ContactDefTable />
    </PageLayout>
  )
}

export default Contact
