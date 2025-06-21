const express = require("express");
const router = express.Router();

const { getAllUsers,createUser,getUserById,updateUser,deleteUser } = require("../controllers/userControl");

const { uploadProfile, uploadGallery } = require('../multerHandling/fileHandling');

router.get( '/' , getAllUsers )

// uploadProfile.single('profilepic')

router.post('/', uploadGallery.array('gallery',10), createUser);

router.get('/:id',getUserById);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;