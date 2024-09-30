export interface MailConfig {
  _id: string
  subject: string
  // to: string[]
  // cc: string[]
  content: string
}

export interface MailTemplate extends Pick<MailConfig, 'subject' | 'content'> {}
