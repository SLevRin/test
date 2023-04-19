import type Messages from './messages/en.json'

declare global {
  type IntlMessages = typeof Messages
}
