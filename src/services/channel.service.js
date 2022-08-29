import { storageService } from "./async-storage.service";
import { utilService } from './util.service'

export const channelService = {
    query,
    getById,
    getEmptyChannel,
    addChannel,
    addMessage,
    joinMemberToChannel
}


const CHANNELS_KEY = 'channelsDB'


const gChannels = _createChannels()

function query(filterBy) {
    if (filterBy) {
        let { channelName } = filterBy
        const regex = new RegExp(channelName, 'i')
        const filteredChannels = gChannels.filter(channel => regex.test(channel.name))
        return filteredChannels
    } else {
        return storageService.query(CHANNELS_KEY)
    }
}

function getById(channelId) {
    return storageService.get(CHANNELS_KEY, channelId)
}

function getEmptyChannel() {
    return {
        _id: utilService.makeId(),
        name: '',
        description: '',
        members: [],
        messages: [
            {
                _id: utilService.makeId(),
                text: 'Channel created successfully',
                sendAt: new Date().toLocaleString(),
                memberName: 'App Bot',
                memberImg: 'https://cdn-icons-png.flaticon.com/512/630/630426.png',
            }
        ]
    }
}

function addMessage(channel, text, memberName, memberImg) {
    const newMessage = {
        _id: utilService.makeId(),
        text,
        sendAt: new Date().toLocaleString(),
        memberName,
        memberImg,
    }
    const channelIdx = gChannels.findIndex(c => c._id === channel._id)
    gChannels[channelIdx].messages.push(newMessage)
    storageService.save(CHANNELS_KEY, gChannels)
}


function addChannel(name, description, member) {
    const newChannel = getEmptyChannel()
    newChannel.name = name
    newChannel.description = description
    newChannel.members.push(member)
    gChannels.push(newChannel)
    storageService.save(CHANNELS_KEY, gChannels)
}

function joinMemberToChannel(channel, member) {
    const channelIdx = gChannels.findIndex(c => c._id === channel._id)
    const currMember = channel.members.find(m => m._id === member._id)
    if (!currMember) gChannels[channelIdx].members.push(member)
    storageService.save(CHANNELS_KEY, gChannels)
}

function _createChannels() {
    let channels = JSON.parse(localStorage.getItem(CHANNELS_KEY))
    if (!channels || !channels.length) {
        channels = [
            {
                _id: utilService.makeId(),
                name: 'FRONT-END-DEVELOPERS',
                description: utilService.makeLorem(120),
                members: [{
                    _id: utilService.makeId(),
                    name: 'Alen',
                    img: 'https://images.unsplash.com/photo-1608876537010-ac56d8731614?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
                }
                ],
                messages: [
                    {
                        _id: utilService.makeId(),
                        text: 'Hey i am message',
                        sendAt: new Date().toLocaleString(),
                        memberName: 'Sofia',
                        memberImg: 'https://images.unsplash.com/photo-1597995722639-b48ea7c50846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                    }
                ]
            },
            {
                _id: utilService.makeId(),
                name: 'RANDOM',
                description: utilService.makeLorem(120),
                members: [{
                    _id: utilService.makeId(),
                    name: 'Sofia',
                    img: 'https://images.unsplash.com/photo-1597995722639-b48ea7c50846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                }
                ],
                messages: [
                    {
                        _id: utilService.makeId(),
                        text: 'Hey i am message',
                        sendAt: new Date().toLocaleString(),
                        memberName: 'Sofia',
                        memberImg: 'https://images.unsplash.com/photo-1597995722639-b48ea7c50846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                    }
                ]
            },
            {
                _id: utilService.makeId(),
                name: 'BACK-END',
                description: utilService.makeLorem(120),
                members: [{
                    _id: utilService.makeId(),
                    name: 'Adam',
                    img: 'https://images.unsplash.com/photo-1603813425271-6ed9a5720f86?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }
                ],
                messages: [
                    {
                        _id: utilService.makeId(),
                        text: 'Hey i am message',
                        sendAt: new Date().toLocaleString(),
                        memberName: 'Sofia',
                        memberImg: 'https://images.unsplash.com/photo-1597995722639-b48ea7c50846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',

                    }
                ]
            },
            {
                _id: utilService.makeId(),
                name: 'CATS AND DOGS',
                description: utilService.makeLorem(120),
                members: [{
                    _id: utilService.makeId(),
                    name: 'Evan',
                    img: 'https://images.unsplash.com/photo-1590925942021-1d44c253d204?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1114&q=80',
                }
                ],
                messages: [
                    {
                        _id: utilService.makeId(),
                        text: 'Hey i am message',
                        sendAt: new Date().toLocaleString(),
                        memberName: 'Sofia',
                        memberImg: 'https://images.unsplash.com/photo-1597995722639-b48ea7c50846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                    }
                ]
            },
            {
                _id: utilService.makeId(),
                name: 'WELCOME',
                description: utilService.makeLorem(120),
                members: [{
                    _id: utilService.makeId(),
                    name: 'Claudio',
                    img: 'https://images.unsplash.com/photo-1546355971-96b0891be97b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                }
                ],
                messages: [
                    {
                        _id: utilService.makeId(),
                        text: 'Hey i am message',
                        sendAt: new Date().toLocaleString(),
                        memberName: 'Sofia',
                        memberImg: 'https://images.unsplash.com/photo-1597995722639-b48ea7c50846?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
                    }
                ]
            },
        ]
        storageService.save(CHANNELS_KEY, channels)
    }
    return channels
}