import { MailTemplate } from '@/shared/types/mail.type'
import { bookingMailTemplate } from '../template/booking-aggent-notify.template'

export interface MailTemplateServicePort {
  gets(): Promise<MailTemplate[]>
  get(templateId: string): Promise<MailTemplate>
  create(template: MailTemplate): Promise<MailTemplate>
  update(template: MailTemplate): Promise<MailTemplate>
  delete(templateId: string): Promise<void>
}

export const MailTemplateService: MailTemplateServicePort = {
  gets: async () => {
    try {
      return Promise.resolve([bookingMailTemplate])
    } catch (error) {
      throw new Error('Failed to get mail templates')
    }
  },
  get: async (templateId: string) => {
    try {
      console.log('templateId', templateId)
      return Promise.resolve(bookingMailTemplate)
    } catch (error) {
      throw new Error('Failed to get mail template')
    }
  },
  create: async (template: MailTemplate) => {
    try {
      return Promise.resolve(template)
    } catch (error) {
      throw new Error('Failed to create mail template')
    }
  },
  update: async (template: MailTemplate) => {
    try {
      return Promise.resolve(template)
    } catch (error) {
      throw new Error('Failed to update mail template')
    }
  },
  delete: async (templateId: string) => {
    console.log('[DEBUG] / delete: / templateId:', templateId)
    try {
      return Promise.resolve()
    } catch (error) {
      throw new Error('Failed to delete mail template')
    }
  }
}
