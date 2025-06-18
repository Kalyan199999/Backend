const User = require("../models/userModel");

const getAllUsers = async (req, res) => {

    console.log("This is a get mothod for all the users!");
    
    try {
        const users = await User.find();

        return res.status(200).json({ message: "Fetched all users",user:users })
    } 
    catch (error) {
        return res.status(404).json({ message: "Error!" })
    }
}

const createUser = async (req, res) => {

    console.log("This is a post mothod for all the users!");

    try {
        const user = new User(req.body);  
        await user.save();

        return res.status(200).json({ message: "User created successfully",user:user })
    } 
    catch (error) 
    {
        return res.status(404).json({ message: "Error!",error:error })
    }
}

const getUserById = async (req, res) => {

    console.log("This is a get mothod for specific users!");

    try {
        const user = await User.findById(req.params.id);

        if(!user) return res.status(400).json({ message: "User not found" })

        return res.status(200).json({ message: "Fetched the user",user:user })
    } 
    catch (error) {
        return res.status(404).json({ message: "Error!" })
    }
}

const updateUser = async (req, res) => {

    console.log("This is a put mothod for the user to update!");

    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true});

        return res.status(200).json({ message: "User updated successfully",user:user })
    } 
    catch (error) {
        return res.status(404).json({ message: "Error!" })
    }
}

const deleteUser = async (req, res) => {

    console.log("This is a delete mothod for the user to delete!");

    try {
        const user = await User.findByIdAndDelete(req.params.id);

        return res.status(200).json({ message: "User deleted successfully",user:user })
    } 
    catch (error) {
        return res.status(404).json({ message: "Error!" })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}