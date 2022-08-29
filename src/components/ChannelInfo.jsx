import { MemberList } from './MembersList'
import { ChannelFilter } from './ChannelFilter'
import { ChannelList } from './ChannelList'
import { MemberPanel } from './MemberPanel'
import { useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faPlus } from '@fortawesome/free-solid-svg-icons'

export const ChannelInfo = ({ channels, channel, members, loggedInMember, onGoBack, onChangeFilter, onToggleModal }) => {
  const params = useParams()
  return (
    <section className='channel-info'>
      <>
        <div className='channel-header'>
          {params.id ? (
            <h1 className='back-to-all-channels' onClick={onGoBack}>
              <span>
                <FontAwesomeIcon icon={faAngleLeft} />
              </span>
              All channels
            </h1>
          ) : (
            <h1 className='main-channels'>
              Channels
              <FontAwesomeIcon onClick={onToggleModal} className='add-channel-icon' icon={faPlus} />
            </h1>
          )}
        </div>
        <div className='channel-inner-info'>
          {params.id ? (
            <>
              <h1 className='channel-name'>{channel.name}</h1>
              <h1 className='channel-description'>{channel.description}</h1>
              <MemberList members={members} />
            </>
          ) : (
            <>
              <ChannelFilter onChangeFilter={onChangeFilter} />
              <ChannelList channels={channels} loggedInMember={loggedInMember} />
            </>
          )}
          <MemberPanel loggedInMember={loggedInMember} />
        </div>
      </>
    </section>
  )
}
