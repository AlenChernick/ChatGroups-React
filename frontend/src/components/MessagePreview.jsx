export const MessagePreview = ({ message }) => {
  return (
    <section className='message-preview'>
      <img className='member-img' src={message.memberImg} alt='member-img' />
      <h1 className='member-name'>{message.memberName}</h1>
      <h1 className='member-send-at'>{message.sendAt}</h1>
      <h1 className='member-message'>{message.text}</h1>
    </section>
  )
}
