import axios from 'axios'
// import { storageService } from "./async-storage.service"
import { httpService } from './http.service'


export const userService = {
    // login,
    logout,
    signup,
    getLoggedInUser,
    uploadUserImg
}

const USER_KEY = 'userDB'

async function signup(name, img) {
    try {
        const newUser = _getEmptyUser()
        newUser.name = name
        newUser.img = img
        const user = await httpService.post('auth/signup', newUser)
        if (user) return _saveLocalUser(user)
    } catch (err) {
        console.log('Cannot signup user', err)
        throw err
    }
}

async function logout() {
    // localStorage.removeItem(USER_KEY)
    try {
        sessionStorage.setItem(USER_KEY, null)
        return await httpService.post('auth/logout')
    } catch (err) {
        console.log('Cannot logout', err)
        throw err
    }
}

async function uploadUserImg(file) {
    // Defining our variables
    const UPLOAD_PRESET = 'chatApp_22' // Insert yours
    const CLOUD_NAME = 'dhrtde6px' // Insert yours
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`
    const FORM_DATA = new FormData();
    // Building the request body
    FORM_DATA.append('file', file)
    FORM_DATA.append('upload_preset', UPLOAD_PRESET)
    // Sending a post method request to Cloudniary' API
    try {
        const res = await axios.post(UPLOAD_URL, FORM_DATA)
        return res.data;
    } catch (err) {
        console.error('ERROR!', err)
    }
}


function _saveLocalUser(user) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user))
    return user
}

function getLoggedInUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY))
}

function _getEmptyUser() {
    return {
        // _id: utilService.makeId(),
        name: '',
        img: '',
    }
}









