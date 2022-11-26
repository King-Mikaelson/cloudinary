const router = require('express').Router()
const Uploads = require('../Controller/detailsUpload')


router.get('/get-images', Uploads.getImage)
router.post('/uploadFile', Uploads.upload, Uploads.uploadImage)
router.post('/register-user', Uploads.registerUser)
router.get('/ping', (req, res) => {
    res.json({
        "message" : "GDG Enugu Cloudinary server working"
    })
})

module.exports = router