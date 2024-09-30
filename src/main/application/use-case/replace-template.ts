import { BookingExtract } from '@/shared/types/booking-extract.type'
import { MailTemplate } from '@/shared/types/mail.type'
import { getDateDisplay } from '../utils/get-date-display'

/**
 * Replaces placeholders in a template string with corresponding values from a data object.
 *
 * @param template - The template string containing placeholders in the format {{key}}.
 * @param data - An object containing key-value pairs to replace the placeholders.
 * @returns The template string with placeholders replaced by their corresponding values.
 *
 * This function uses a regular expression to find placeholders in the format {{key}}
 * within the template string. It then replaces each placeholder with the corresponding
 * value from the data object. If a key is not found in the data object, the original
 * placeholder is left unchanged.
 *
 * Example usage:
 * const template = "Hello, {{name}}! Your order {{orderNumber}} will arrive on {{date}}.";
 * const data = { name: "John", orderNumber: "12345", date: "2023-05-15" };
 * const result = replaceTemplate(template, data);
 * console.log("Result:", result);
 * // Output: "Hello, John! Your order 12345 will arrive on 2023-05-15."
 */
// Add this type
type StringNumberDateRecord<T> = {
  [K in keyof T]: string | number | Date
}
export const replaceString = <T>(
  string: string,
  dataMapping: StringNumberDateRecord<T>
): string => {
  return string.replace(/\{\{(\w+):(\w+)\}\}/g, (match, p1, p2) => {
    if (!dataMapping[p1]) {
      console.log(`Key not found: ${p1}`)
      return match
    }

    if (dataMapping[p1] instanceof Date) {
      return getDateDisplay(dataMapping[p1], p2)
    }

    return dataMapping[p1].toString()
  })
}

export const bookingToMailTemplateUC = (
  template: MailTemplate,
  bookingExtract: BookingExtract
): MailTemplate => {
  const { subject, content } = template
  return {
    subject: replaceString<BookingExtract>(subject, bookingExtract),
    content: replaceString<BookingExtract>(content, bookingExtract)
  }
}
