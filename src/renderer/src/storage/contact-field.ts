import { ContactDef, ContactDefField } from '@/shared/types/contact'
import { createStore } from '../utils/zustand'

interface ContactDefStorage {
  contactDef: ContactDef
  currentField: {
    position: number | 'new'
    field: ContactDefField
  } | null

  setContactDef: (contactDef: ContactDef) => void

  setCurrentField: (position: number | 'new', field: ContactDefField) => void
  editCurrentField: (field: ContactDefField) => void
  resetCurrentField: () => void

  setField: (position: number | 'new', field: ContactDefField) => void
  deleteField: (position: number) => void
  resetContactDef: () => void
}

export const useContactDefStorage = createStore<ContactDefStorage>((set) => ({
  contactDef: {
    id: '',
    name: '',
    description: '',
    fields: []
  },
  currentField: null,

  setContactDef: (contactDef: ContactDef) =>
    set((state) => {
      state.contactDef = contactDef
    }),

  setCurrentField: (position, field) =>
    set((state) => {
      state.currentField = { position, field }
    }),

  editCurrentField: (field: ContactDefField) =>
    set((state) => {
      if (!state.currentField) return
      state.currentField.field = field
    }),

  resetCurrentField: () =>
    set((state) => {
      state.currentField = null
    }),

  setField: (position, field) =>
    set((state) => {
      console.log('[DEBUG] / useContactDefStorage / position:', position, field)
      if (position === 'new') {
        console.log('before error')
        state.contactDef.fields = [...state.contactDef.fields, field]
        console.log('after error')
      } else {
        state.contactDef.fields[position] = field
      }
    }),

  deleteField: (position: number) =>
    set((state) => {
      state.contactDef.fields.splice(position, 1)
    }),

  resetContactDef: () =>
    set((state) => {
      state.contactDef = { id: '', name: '', description: '', fields: [] }
    })
}))

interface AddFieldDialogState {
  isOpen: boolean
  toggleOpen: () => void
}

export const useAddFieldDialogState = createStore<AddFieldDialogState>((set) => ({
  isOpen: false,
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}))
