const multer = require('multer');
const path = require('path');

// Storage for profile pictures
const profileStorage = multer.diskStorage({

    destination: (req, file, cb) => {
        try {
            cb(null, 'images/profilephotos');
        } catch (error) {
            console.log("Path not found!");
            
        }
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }

});


// Storage for gallery images
const galleryStrorage = multer.diskStorage({

    destination: (req, file, cb) => {
        try {
            cb(null, 'images/gallery');
        } 
        catch (error) {
            console.log("multiple images upload path not found!");
            
        }
    },

    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`);
    }

});

// Create multer instances
const uploadProfile = multer({ storage: profileStorage });
const uploadGallery = multer({ storage: galleryStrorage });

// Export them
module.exports = {
  uploadProfile,
  uploadGallery
};