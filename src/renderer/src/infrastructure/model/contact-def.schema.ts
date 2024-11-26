export const contactDefSchema = {
  version: 0,
  title: 'Contact Definition',
  primaryKey: 'id',
  type: 'object',
  description:
    'Định nghĩa các đối tượng liên hệ, sau đó dúng để tạo ra các liên hệ dựa trên định nghĩa này',
  properties: {
    id: {
      type: 'string',
      maxLength: 100
    },
    name: {
      type: 'string'
    },
    description: {
      type: 'string'
    },
    fields: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          key: {
            type: 'string'
          },
          name: {
            type: 'string'
          },
          description: {
            type: 'string'
          },
          isRequired: {
            type: 'boolean'
          },
          type: {
            type: 'string',
            enum: ['text', 'email', 'number', 'select', 'checkbox', 'checkboxes', 'date']
          },
          allowList: {
            type: 'boolean'
          },
          options: {
            type: 'array',
            items: {
              type: 'object',
              properties: {
                label: {
                  type: 'string'
                },
                value: {
                  type: 'string'
                }
              },
              required: ['label', 'value']
            }
          }
        },
        required: ['key', 'name', 'description', 'isRequired', 'type']
      }
    }
  },
  required: ['id', 'name', 'description', 'fields']
}
