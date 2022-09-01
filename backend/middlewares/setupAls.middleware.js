const authService = require('../api/auth/auth.service')
const asyncLocalStorage = require('../services/als.service')

async function setupAsyncLocalStorage(req, res, next) {
    const storage = {}
    asyncLocalStorage.run(storage, () => {
        if (!req.cookies) return next()
        const loggedInUser = authService.validateToken(req.cookies.loginToken)
        if (loggedInUser) {
            const alsStore = asyncLocalStorage.getStore()
            alsStore.loggedInUser = loggedInUser
        }
        next()
    })
}

module.exports = setupAsyncLocalStorage

