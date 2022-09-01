const authService = require('../api/auth/auth.service')

async function requireAuth(req, res, next) {
    if (!req?.cookies?.loginToken) return res.status(401).send('Not Authenticated')
    const loggedInUser = authService.validateToken(req.cookies.loginToken)
    if (!loggedInUser) return res.status(401).send('Not Authenticated')
    next()
}


module.exports = {
    requireAuth,
}
