import { convert } from 'html-to-text'

export const htmlToTextForDescription = (html: string) => {
  return convert(html, {
    limits: {
      maxInputLength: 140
    }
  })
}
export const htmlToText = (html: string) => {
  return convert(html, {
    wordwrap: 130
  })
}