const User = require('../models/userModel');

const getAllUsers = async (req, res) => {
    try 
    {
        const users = await User.find();

        return res.status(200).json({message:"Users fetched successfully!",data:users});
    } 
    catch (error) 
    {
        res.status(500).json({ message: error.message });
    }
}

const createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        return res.status(201).json({message:"User created successfully!",data:user});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        return res.status(200).json({message:"User fetched successfully!",data:user});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.status(200).json({message:"User updated successfully!",data:user});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        return res.status(200).json({message:"User deleted successfully!",data:user});
    } 
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}