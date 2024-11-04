import React from 'react'
import EmptyContact from '@components/contact/empty-contact'
import { useNavigate } from 'react-router-dom'
import { ContactDefTable } from '../components/contact/ contact-def-table'
import PageLayout from '../components/ui/page-layout'
import { CONTACT_DEF_DATA } from '../data/contact-def.data'

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
      {CONTACT_DEF_DATA.length === 0 ? (
        <EmptyContact onCreateNew={addFormDefinition} />
      ) : (
        <ContactDefTable />
      )}
    </PageLayout>
  )
}

export default Contact
