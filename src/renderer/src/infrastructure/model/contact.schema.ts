export const contactEntrySchema = {
  version: 0,
  title: 'Contact Entry',
  primaryKey: 'id',
  type: 'object',
  description: 'Contact entry based on contact definition',
  properties: {
    id: {
      type: 'string',
      maxLength: 100
    },
    contactDefId: {
      type: 'string',
      maxLength: 100
    },
    data: {
      type: 'object',
      additionalProperties: true
    }
  },
  required: ['id', 'contactDefId', 'data']
}
