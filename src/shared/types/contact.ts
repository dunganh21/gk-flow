/**
 * Contact có thẻ đại diện liên lạc cho nhiều đơn vị khác nhau
 * 1. Aggent nhận hàng bên  Nhật
 * 2. Công ty vận chuyển container ra cảng
 */
export type Contact = {
  id: string
  email: string[]
  representative: string
  /**
   * Có thể sử dụng tag cho mục đích tìm kiếm mail sau này
   */
  tags: string[]

  /**
   * Ghi chú
   */
  note?: string
}

export type AllowListField<T> = T & {
  allowList?: boolean
}

export type ContactDefFieldBase = {
  key: string
  name: string
  description: string
  isRequired: boolean
}

export type ContactDefTextField = AllowListField<ContactDefFieldBase> & {
  type: 'text'
}

export type ContactDefFieldEmail = AllowListField<ContactDefFieldBase> & {
  type: 'email'
}

export type ContactDefFieldNumber = AllowListField<ContactDefFieldBase> & {
  type: 'number'
}

export type ContactDefFieldSelect = ContactDefFieldBase & {
  type: 'select'
  options: {
    label: string
    value: string
  }[]
}

export type ContactDefFieldCheckbox = ContactDefFieldBase & {
  type: 'checkbox'
}
export type ContactDefFieldCheckboxes = ContactDefFieldBase & {
  type: 'checkboxes'
  options: {
    label: string
    value: string
  }[]
}

export type ContactDefFieldDate = ContactDefFieldBase & {
  type: 'date'
}

export type FieldTypes = 'text' | 'number' | 'select' | 'checkbox' | 'date'
export type ContactDefField =
  | ContactDefTextField
  | ContactDefFieldEmail
  | ContactDefFieldNumber
  | ContactDefFieldSelect
  | ContactDefFieldCheckbox
  | ContactDefFieldCheckboxes
  | ContactDefFieldDate
/**
 * Định dạnh của loại contact
 */
export interface ContactDef {
  id: string
  name: string
  description: string
  fields: ContactDefField[]
}
