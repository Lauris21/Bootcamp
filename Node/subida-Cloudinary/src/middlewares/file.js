const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

const storage = new CloudinaryStorage({
  // Almacenamiento para cloudinary
  cloudinary: cloudinary,
  params: {
    folder: 'Dogs',
    allowedFormats: ['jpg', 'png', 'jpeg', 'gif'],
  },
});

// Multer gestiona almacenamiento -> middleware
const upload = multer({ storage });

module.exports = upload;
