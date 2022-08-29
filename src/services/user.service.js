import axios from 'axios'
import { storageService } from "./async-storage.service"
import { utilService } from "./util.service"


export const userService = {
    // login,
    // logout,
    signup,
    getLoggedInUser,
    uploadUserImg
}

const USER_KEY = 'userDB'


function getLoggedInUser() {
    return storageService.load(USER_KEY)
}

function _getEmptyUser() {
    return {
        _id: utilService.makeId(),
        name: '',
        img: '',
    }
}

function signup(name, img) {
    const user = _getEmptyUser()
    user.name = name
    user.img = img
    storageService.save(USER_KEY, user)
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




