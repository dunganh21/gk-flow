import { ContactDef } from '@/shared/types/contact'

export const CONTACT_DEF_DATA: ContactDef[] = [
  {
    name: 'Aggent bên nhật',
    description: 'Aggent bên nhật chuyện nhận tàu từ bên đấy sang',
    fields: [
      {
        key: 'name',
        name: 'Họ tên',
        type: 'text',
        isRequired: true,
        description: 'Họ tên của agent'
      },
      {
        key: 'phone',
        name: 'Số điện thoại',
        type: 'text',
        isRequired: false,
        description: 'Số điện thoại của agent'
      },
      {
        key: 'email',
        name: 'Email',
        type: 'email',
        isRequired: true,
        description: 'Email của agent'
      },
      {
        key: 'address',
        name: 'Địa chỉ',
        isRequired: false,
        type: 'text',
        description: 'Địa chỉ của agent',
        allowList: true
      }
    ]
  },
  {
    name: 'Lái xe',
    description: 'Lái xe chuyện nhận tàu từ bên nhật sang',
    fields: [
      {
        key: 'name',
        name: 'Họ tên',
        type: 'text',
        isRequired: true,
        description: 'Họ tên của agent'
      },
      {
        key: 'email',
        name: 'Email',
        type: 'email',
        isRequired: true,
        description: 'Email của agent'
      }
    ]
  }
]
