import { AddMessage } from './AddMessage'
import { MessageList } from './MessageList'
import { useParams } from 'react-router-dom'

export const ChannelActions = ({ messages, channel, onAddMessage }) => {
  const params = useParams()
  return (
    <section className='channel-actions'>
      <div className='channel-header'>
        <h1 className='channel-header-name'>{channel.name}</h1>
      </div>
      {!params.id || params.id === 'welcome-channel' ? (
        <MessageList messages={messages} />
      ) : (
        <>
          <MessageList messages={messages} />
          <AddMessage channel={channel} onAddMessage={onAddMessage} />
        </>
      )}
    </section>
  )
}
