import { MailTemplate } from '@/shared/types/mail.type'

// về sau mail template này sẽ có thể xuất hiện ở bất cứ chỗ nào
export const bookingMailTemplate: MailTemplate = {
  subject:
    'BA: BOOKING ADVICE // {{freightType}} SHIPMENT // SHIPPER: NMR THANH HOA // HPH-UKB // ETD-{{etd:DD/MM/YY}} // BOOKING [SYMBOL] // REF {{refCode}}',
  content: 'Thank you for your booking. Your booking number is {{bookingNumber}}.'
}
