const mongoose = require('mongoose');

// CREATING THE MONGOOSE SCHEMA
let detailSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    image_id:{
        type: String
    },
    image_url:{
        type: String,
        required: true
    },
    post_data:{
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Detail', detailSchema)