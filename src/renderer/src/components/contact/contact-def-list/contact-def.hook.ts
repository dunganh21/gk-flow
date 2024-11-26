import { ContactDef } from '@/shared/types/contact'
import { useCallback } from 'react'
import { useRxCollection, useRxData } from 'rxdb-hooks'
import { toast } from '../../ui/toast/use-toast'

export const useContactDefList = () => {
  const queryConstructor = useCallback((collection) => collection.find({ limit: 20 }), [])
  const res = useRxData<ContactDef>('contact-defs', queryConstructor)

  const { result, isFetching } = res
  return {
    result,
    isFetching
  }
}

export const useContactDelete = () => {
  const collection = useRxCollection<ContactDef>('contact-defs')
  const deleteContactDef = useCallback(async (id: string) => {
    const res = await collection
      ?.findOne({
        selector: {
          id
        }
      })
      .remove()

    if (res) {
      toast({
        description: 'Contact definition deleted'
      })
    } else {
      toast({
        description: 'Failed to delete contact definition',
        variant: 'destructive'
      })
    }
  }, [])

  return {
    deleteContactDef
  }
}
