const router = require('express').Router()
const Uploads = require('../Controller/detailsUpload')


router.get('/get-images', Uploads.getImage)
router.post('/uploadFile', Uploads.upload, Uploads.uploadImage)
router.post('/register-user', Uploads.registerUser)

module.exports = router