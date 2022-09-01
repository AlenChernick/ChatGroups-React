const dbService = require('../../services/db.service')
const logger = require('../../services/logger.service')
const ObjectId = require('mongodb').ObjectId

module.exports = {
    query,
    getById,
    getByUsername,
    // remove,
    // update,
    add
}


async function query() {
    try {
        const collection = await dbService.getCollection('user')
        let users = await collection.find('user').toArray()
        users = users.map(user => {
            user.createdAt = ObjectId(user._id).getTimeStamp()
            return user
        })
        return users
    } catch (err) {
        logger.error('Cannot find users', err)
        throw err
    }
}

async function add(user) {
    try {
        const userToAdd = {
            name: user.name,
            img: user.img
        }
        const collection = await dbService.getCollection('user')
        await collection.insertOne(userToAdd)
        return userToAdd
    } catch (err) {
        logger.error('Cannot add user', err)
        throw err
    }
}

async function getById(userId) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ _id: ObjectId(userId) })
        return user
    } catch (err) {
        logger.error(`While finding user by id: ${userId}`, err)
        throw err
    }
}

async function getByUsername(name) {
    try {
        const collection = await dbService.getCollection('user')
        const user = await collection.findOne({ name })
        return user
    } catch (err) {
        logger.error(`While finding user by username : ${name}`, err)
        throw err
    }
}