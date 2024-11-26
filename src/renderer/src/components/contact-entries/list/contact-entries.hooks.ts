import { ContactDef, ContactEntry } from '@/shared/types/contact'
import { useCallback } from 'react'
import { RxCollection } from 'rxdb'
import { useRxData } from 'rxdb-hooks'

export const useContactEntries = (contactDefId: string) => {
  const contactDefQueryConstructor = useCallback(
    (collection: RxCollection<ContactDef>) =>
      collection.findOne({
        selector: {
          id: contactDefId
        }
      }),
    [contactDefId]
  )

  const contactDefRes = useRxData<ContactDef>('contact-defs', contactDefQueryConstructor)

  const contactEntriesQueryConstructor = useCallback(
    (collection: RxCollection<ContactEntry>) =>
      collection.find({
        selector: {
          contactDefId
        },
        limit: 20
      }),
    [contactDefId]
  )

  const contactEntriesRes = useRxData<ContactEntry>('contacts', contactEntriesQueryConstructor)

  return {
    result: contactEntriesRes.result,
    contactDef: contactDefRes.result?.[0],
    isFetching: contactEntriesRes.isFetching || contactDefRes.isFetching
  }
}
