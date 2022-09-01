import { useNavigate } from 'react-router-dom'
import { channelService } from '../services/channel.service'

export const ChannelPreview = ({ channel, loggedInMember }) => {
  const navigate = useNavigate()

  const onJoinToChannel = () => {
    channelService.joinMemberToChannel(channel, loggedInMember)
    navigate(`/${channel._id}`)
  }

  const channelFirstLetter = channel.name.charAt(0)
  return (
    <section className='channel-preview'>
      <span className='channel-icon'>{channelFirstLetter}</span>
      <h2 className='main-channel-name' onClick={onJoinToChannel}>
        {channel.name}
      </h2>
    </section>
  )
}
