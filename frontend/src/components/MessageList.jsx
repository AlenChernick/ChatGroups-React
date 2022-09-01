import { MessagePreview } from './MessagePreview'

export const MessageList = ({ messages }) => {
  return (
    <section className='message-list'>
      {messages.map((message) => (
        <MessagePreview key={message._id} message={message} />
      ))}
    </section>
  )
}
