import { MailTemplate } from '@/shared/types/mail.type'

export const bookingMailTemplate: MailTemplate = {
  subject:
    'BA: BOOKING ADVICE // ${freightType} SHIPMENT // SHIPPER: NMR THANH HOA // HPH-UKB // ETD-20/09/2024 // BOOKING [SYMBOL] // REF [Số ref]',
  content: 'Thank you for your booking. Your booking number is {{bookingNumber}}.'
}
