import { AddMessage } from '../components/AddMessage'
import { MessageList } from '../components/MessageList'

export const ChannelActions = ({ messages, channel, onAddMessage }) => {
  return (
    <section className='channel-actions'>
      <div className='channel-header'>
        <h1 className='channel-header-name'>{channel.name}</h1>
      </div>
      <MessageList messages={messages} />
      <AddMessage channel={channel} onAddMessage={onAddMessage} />
    </section>
  )
}
