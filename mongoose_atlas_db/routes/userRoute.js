const express = require('express');
const router = express.Router();

const { getAllUsers,createUser,getUserById,updateUser,deleteUser } = require('../controls/userControl')

router.get('/',getAllUsers)
router.post('/',createUser)
router.get('/:id',getUserById)
router.put('/:id',updateUser)
router.delete('/:id',deleteUser)

module.exports = router;