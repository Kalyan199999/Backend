const express = require("express");
const router = express.Router();

const { getAllUsers,createUser,getUserById,updateUser,deleteUser } = require("../controllers/userControl");

const { uploadProfile, uploadGallery } = require('../multerHandling/fileHandling');

router.get( '/' , getAllUsers )

router.post('/', uploadProfile.single('profilepic'), createUser);

router.get('/:id',getUserById);
router.put('/:id',updateUser);
router.delete('/:id',deleteUser);

module.exports = router;