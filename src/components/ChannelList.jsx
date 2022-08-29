import React from 'react'
import { ChannelPreview } from './ChannelPreview'

export const ChannelList = ({ channels, loggedInMember }) => {
  return (
    <section className='channel-list'>
      {channels.map((channel) => (
        <ChannelPreview key={channel._id} channel={channel} loggedInMember={loggedInMember} />
      ))}
    </section>
  )
}
