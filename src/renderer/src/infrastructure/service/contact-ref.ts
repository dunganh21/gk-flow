import { ContactDef } from '@/shared/types/contact'
import { useDbInstance } from '../../storage/db-instance'

// interface ContactDefService {
//   getContactDefs: () => RxQuery<>
//   getContactDefById: (id: string) => Promise<ContactDef | null>
//   createContactDef: (contactDef: ContactDef) => Promise<ContactDef | null>
//   updateContactDef: (contactDef: ContactDef) => Promise<ContactDef | null>
//   deleteContactDef: (id: string) => Promise<void>
// }

const createContactDefService = () => {
  const { localDb } = useDbInstance.getState()

  return {
    getContactDefs: async () => {
      const contactDefs = await localDb?.['contact-defs'].find().exec()
      return contactDefs
    },

    getContactDefById: async (id: string) => {
      const contactDef = await localDb?.['contact-defs'].findOne({ selector: { id } }).exec()
      return contactDef
    },

    createContactDef: async (contactDef: ContactDef) => {
      const newContactDef = await localDb?.['contact-defs'].insert(contactDef)
      return newContactDef ?? null
    },

    updateContactDef: async (id: string, newContactUpdate: Partial<ContactDef>) => {
      const updatedContactDef = await localDb?.['contact-defs']
        .find({ selector: { id } })
        .update(newContactUpdate)
      return updatedContactDef ?? null
    }
  }
}

export const contactDefService = createContactDefService()
