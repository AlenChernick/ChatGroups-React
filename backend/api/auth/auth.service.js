const Cryptr = require('cryptr')
const bcrypt = require('bcrypt')
const userService = require('../user/user.service')
const logger = require('../../services/logger.service')

const cryptr = new Cryptr(process.env.SECRET1 || 'Secret-Puk-1234')

async function login(name) {
    try {
        logger.debug(`auth.service - login with name: ${name}`)
        const user = await userService.getByUsername(name)
        return user
    } catch (err) {
        console.log('Cannot login', err);
        throw error
    }
}


async function signup(name, img) {
    logger.debug(`auth.service - signup with name: ${name}`)
    if (!name) return Promise.reject('Name are required')
    return await userService.add({ name, img })
}

function getLoginToken(user) {
    return cryptr.encrypt(JSON.stringify(user))
}

function validateToken(loginToken) {
    try {
        const json = cryptr.decrypt(loginToken)
        const loggedInUser = JSON.parse(json)
        return loggedInUser
    } catch (err) {
        console.log('Invalid login token', err)
    }
    return null
}

module.exports = {
    login,
    signup,
    getLoginToken,
    validateToken
}