export const defaultContactEntryList: Record<string, any>[] = [
  {
    companyName: ['Shipping Company 1', 'Shipping Company 2'],
    email: ['shipping@company1.com', 'shipping@company2.com', 'shipping@company3.com'],
    employeeCount: 100,
    service: true,
    services: ['air', 'sea', 'land'],
    establishedDate: '2024-01-01'
  },
  {
    companyName: ['Food company 1', 'Food company 2'],
    email: ['food@company1.com', 'food@company2.com'],
    employeeCount: 200,
    service: true,
    services: ['air', 'sea'],
    establishedDate: '2024-01-01'
  },
  {
    companyName: ['Shipping Company 4', 'Shipping Company 5'],
    email: ['shipping@company4.com', 'shipping@company5.com'],
    employeeCount: 300,
    service: true,
    services: ['air', 'sea', 'land'],
    establishedDate: '2024-01-01'
  },
  {
    companyName: ['Shipping Company 6', 'Shipping Company 7'],
    email: ['shipping@company6.com', 'shipping@company7.com'],
    employeeCount: 400,
    service: true,
    services: ['air', 'sea'],
    establishedDate: '2024-01-01'
  }
]

export const sampleContactDef: ContactDef = {
  id: 'shipping-agent',
  name: 'Shipping Agent',
  description: 'Contact information for shipping agents',
  fields: [
    {
      type: 'text',
      key: 'companyName',
      name: 'Company Name',
      description: 'Name of the shipping company',
      isRequired: true,
      allowList: true
    },
    {
      type: 'email',
      key: 'email',
      name: 'Email Address',
      description: 'Primary email contact',
      isRequired: true,
      allowList: true
    },
    {
      type: 'number',
      key: 'employeeCount',
      name: 'Number of Employees',
      description: 'Total number of employees',
      isRequired: false,
      allowList: false
    },
    {
      type: 'checkbox',
      key: 'service',
      name: 'Services Offered',
      description: 'Available shipping services',
      isRequired: true
    },
    {
      type: 'checkboxes',
      key: 'services',
      name: 'Services Offered',
      description: 'Available shipping services',
      isRequired: true,
      options: [
        { label: 'Air Freight', value: 'air' },
        { label: 'Sea Freight', value: 'sea' },
        { label: 'Land Transport', value: 'land' }
      ]
    },
    {
      type: 'date',
      key: 'establishedDate',
      name: 'Established Date',
      description: 'Company establishment date',
      isRequired: false
    }
  ]
}
