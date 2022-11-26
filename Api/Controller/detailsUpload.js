const Details = require('../models/detailsUploader');
const cloudinary  = require('../services/cloudinary');
var multer = require('multer');


const upload = multer({dest: 'uploads'}).single('image')

// DECLARE THE ROUTES FOR THE HTTP METHODS

// ROUTE FOR GETTING ALL THE IMAGES FROM CLOUDINARY
const getImage = (req, res, next) => {
    Details.find().select('name image_url').exec().then(doc => {
        const response = {
            counts: doc.length,
            details: doc.map(doc => {
                return {
                    name: doc.name,
                    image: doc.image_url
                }
            })
        }
        res.status(200).json(response)
    }).catch(error => {
        res.status(500).json({
            error: error
        })
    })
}

// ROUTE TO POST IMAGES TO CLOUDINARY
const uploadImage = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            console.log(err)
            return res.status(400).json({error: err})
        }
        cloudinary.uploader.upload(req.file.path)
        .then((result) => {return res.status(200).json(
            {
                image_url: result.secure_url,
                image_id: result.public_id
            }
        )})
        .catch((err) => { return res.status(400).json({error: err})})
    })
}

// ROUTE TO REGISTER NEW USER
const registerUser = async (req, res) => {
    try {
        const detail = new Details({
            name: req.body.name,
            image_id: req.body.image_id,
            image_url: req.body.image_url
        })
        await detail.save()
        return res.status(200).json({success: `User registered successfully`})

    } catch(err) {
        console.log(err)
        return res.status(400).json(err.message)
    }
}


module.exports = { uploadImage, upload, registerUser, getImage }
