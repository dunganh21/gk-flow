import { uid } from '@/renderer/src/lib/uid'
import { useContactDefStorage } from '@/renderer/src/storage/contact-field'
import { ContactDef } from '@/shared/types/contact'
import { useCallback, useEffect } from 'react'
import { useRxCollection, useRxData } from 'rxdb-hooks'
import { toast } from '../../ui/toast/use-toast'

export const useContactFormDef = (id: string) => {
  const queryConstructor = useCallback(
    (collection) =>
      collection.find({
        selector: {
          id
        }
      }),
    [id]
  )
  const { result, isFetching, isExhausted } = useRxData<ContactDef>(
    'contact-defs',
    queryConstructor
  )

  useEffect(() => {
    if (isExhausted && result?.[0]) {
      const { setContactDef } = useContactDefStorage.getState()
      const mutableContactDef = result?.[0].toMutableJSON()
      setContactDef(mutableContactDef)
    }
  }, [isExhausted])

  return {
    contactDef: result?.[0],
    isFetching
  }
}

export const useContactFormDefActions = () => {
  const contactDef = useContactDefStorage((state) => state.contactDef)
  const collection = useRxCollection<ContactDef>('contact-defs')

  const onSaveFormDef = async () => {
    if (!contactDef.id) {
      const res = await collection?.insert({ ...contactDef, id: uid() })
      console.log('[DEBUG] / useContactFormDefActions / onSaveFormDef / res:', res)
    } else {
      const res = await collection
        ?.findOne({ selector: { id: contactDef.id } })
        .update({ $set: contactDef })
      console.log('[DEBUG] / useContactFormDefActions / onSaveFormDef / res:', res)
    }

    toast({
      title: 'Contact form saved',
      description: 'Your contact form has been saved successfully'
    })
  }

  return {
    onSaveFormDef
  }
}
