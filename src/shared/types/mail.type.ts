export interface MailConfig {
  subject: string
  to: string[]
  cc: string[]
  content: string
}

export interface MailTemplate extends Pick<MailConfig, 'subject' | 'content'> {}
