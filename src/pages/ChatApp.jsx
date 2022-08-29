import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ChannelInfo } from '../components/ChannelInfo'
import { ChannelActions } from '../components/ChannelActions'
import { AddChannelModal } from '../components/AddChannelModal'
import { channelService } from '../services/channel.service'
import { userService } from '../services/user.service'

export const ChatApp = () => {
  let [isModalOpen, setModal] = useState(false)
  const [channels, setChannels] = useState([])
  const [filterBy, setFilterBy] = useState(null)
  const [channel, setChannel] = useState([])
  const [members, setMembers] = useState([])
  const [loggedInMember, setLoggedInMember] = useState({})
  const [messages, setMessages] = useState([])
  const params = useParams()
  const navigate = useNavigate()

  const loadChannels = useCallback(async () => {
    const channels = await channelService.query(filterBy)
    setChannels(channels)
  }, [filterBy])

  const loadChannel = useCallback(async () => {
    const channelId = params.id
    const channel = await channelService.getById(channelId)
    setChannel(channel)
    setMembers(channel.members)
    setMessages(channel.messages)
  }, [params.id])

  const loadLoggedInMember = useCallback(async () => {
    const loggedInMember = await userService.getLoggedInUser()
    setLoggedInMember(loggedInMember)
  }, [])

  const onChangeFilter = useCallback(
    (filterBy) => {
      setFilterBy(filterBy)
      loadChannels()
    },
    [loadChannels]
  )

  useEffect(() => {
    params.id ? loadChannel() : loadChannels()
    loadLoggedInMember()
  }, [params.id, loadChannels, loadChannel, loadLoggedInMember])

  const onAddMessage = (ev) => {
    ev.preventDefault()
    const { message } = ev.target.elements
    if (message.value === '') return
    channelService.addMessage(channel, message.value, loggedInMember.name, loggedInMember.img)
    loadChannel()
    message.value = ''
  }

  const onAddChannel = (ev) => {
    ev.preventDefault()
    const { name, description } = ev.target.elements
    if (name.value === '' || description.value === '') return
    channelService.addChannel(name.value, description.value, loggedInMember)
    loadChannels()
    setModal(false)
  }

  const onToggleModal = () => {
    setModal((isModalOpen = !isModalOpen))
  }

  const onGoBack = () => {
    navigate('/')
  }

  return (
    <section className='chat-app main-layout full'>
      <ChannelInfo
        channels={channels}
        channel={channel}
        members={members}
        loggedInMember={loggedInMember}
        onGoBack={onGoBack}
        onChangeFilter={onChangeFilter}
        onToggleModal={onToggleModal}
      />
      {isModalOpen ? <AddChannelModal onAddChannel={onAddChannel} onToggleModal={onToggleModal} /> : ''}
      <ChannelActions messages={messages} channel={channel} onAddMessage={onAddMessage} />
    </section>
  )
}
