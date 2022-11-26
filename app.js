let express = require('express');
let cors = require('cors')
let mongoose = require('mongoose')
// importing the detailsupload to handle routing

let app = express();
const router = express.Router()
// CONNETING TO MONGODB
mongoose.connect('mongodb+srv://Alucard:michealjackson@cluster0.2mkukpe.mongodb.net/?retryWrites=true&w=majority')
// mongoose.connection


// TO PROCESS ANY STATIC FILE OR FOLDER
app.use(express.static('uploads'));


app.use(express.json())

// HANDLING CORS ERROR
app.use(cors())

app.use('', require('./Api/routes/detailsUpload'))

// HANDLING ERRORS
// app.use((req, res, next) => {
//     const error = new Error('NOT FOUND');
//     error.status = 404;
//     next(error);
// })
// 
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        error:{
            message: error.message
        }
    })
})

const port = process.env.PORT || 3030;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
});

module.exports = app