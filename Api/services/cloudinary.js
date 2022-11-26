const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
  cloud_name: 'db9ivjssj', 
  api_key: '619378393516158', 
  api_secret: 'a1ylNx_6cp2AZ14Q8Jv1wprquhg' 
});

module.exports = cloudinary