import { ChannelPreview } from './ChannelPreview'

export const ChannelList = ({ channels, loggedInMember }) => {
  return (
    <section className='channel-list'>
      {channels.map((channel) =>
        channel._id === 'welcome-channel' ? '' : <ChannelPreview key={channel._id} channel={channel} loggedInMember={loggedInMember} />
      )}
    </section>
  )
}
