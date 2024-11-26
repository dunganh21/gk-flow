import { addRxPlugin, RxCollection, RxDatabase } from 'rxdb'
import { RxDBDevModePlugin } from 'rxdb/plugins/dev-mode'
import { createRxDatabase } from 'rxdb'
import { getRxStorageDexie } from 'rxdb/plugins/storage-dexie'
import { ContactDef, ContactEntry } from '@/shared/types/contact'
import { contactDefSchema } from './contact-def.schema'
import { RxDBUpdatePlugin } from 'rxdb/plugins/update'
import { contactEntrySchema } from './contact.schema'
addRxPlugin(RxDBDevModePlugin)
addRxPlugin(RxDBUpdatePlugin)

interface DatabaseCollections {
  'contact-defs': RxCollection<ContactDef>
  contacts: RxCollection<ContactEntry>
}

export type LocalDatabase = RxDatabase<DatabaseCollections>

export const initLocalDb = async (): Promise<LocalDatabase> => {
  console.log('[DEBUG] / initLocalDb / starting')
  const localDb = await createRxDatabase<DatabaseCollections>({
    name: 'main-storage',
    storage: getRxStorageDexie()
  })

  await localDb.addCollections({
    'contact-defs': {
      schema: contactDefSchema
    },
    contacts: {
      schema: contactEntrySchema
    }
  })

  return localDb
}
