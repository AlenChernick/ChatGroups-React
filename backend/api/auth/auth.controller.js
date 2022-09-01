const authService = require('./auth.service')
const logger = require('../../services/logger.service')

async function login(req, res) {
    try {
        const { name } = req.body
        const user = await authService.login(name)
        const loginToken = authService.getLoginToken(user)
        logger.info('User login: ', user)
        res.cookie('loginToken', loginToken)
        res.json(user)
    } catch (err) {
        logger.error('Failed to login', err)
        res.status(401).send({ err: 'Failed to login' })
    }
}

async function signup(req, res) {
    try {
        const { name, img } = req.body
        const account = await authService.signup(name, img)
        logger.debug(`auth.route - new account created:${JSON.stringify(account)}`)
        const user = await authService.login(name)
        const loginToken = authService.getLoginToken(user)
        logger.info('User login: ', user)
        res.cookie('loginToken', loginToken)
        res.json(user)
        return user
    } catch (err) {
        logger.error('Failed to signup', err)
        throw err
    }
}

async function logout(req, res) {
    try {
        res.clearCookie('loginToken')
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(500).send({ err: 'Failed to logout' })
    }
}

module.exports = {
    login,
    logout,
    signup
}