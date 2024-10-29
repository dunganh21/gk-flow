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
  allowList: boolean
}

export type ContactDefFieldBase = {
  key: string
  name: string
  description: string
  isRequired: boolean
}

export type ContactDefTextField = ContactDefFieldBase & {
  type: 'text'
}
export type ContactDefTextFieldList = AllowListField<ContactDefTextField>

export type ContactDefFieldNumber = ContactDefFieldBase & {
  type: 'number'
}
export type ContactDefFieldNumberList = AllowListField<ContactDefFieldNumber>

export type ContactDefFieldSelect = ContactDefFieldBase & {
  type: 'select'
  options: {
    label: string
    value: string
  }[]
}

export type ContactDefFieldCheckbox = ContactDefFieldBase & {
  type: 'checkbox'
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
  | ContactDefTextFieldList
  | ContactDefFieldNumber
  | ContactDefFieldNumberList
  | ContactDefFieldSelect
  | ContactDefFieldCheckbox
  | ContactDefFieldDate
/**
 * Định dạnh của loại contact
 */
export interface ContactDef {
  name: string
  description: string
  fields: ContactDefField[]
}
