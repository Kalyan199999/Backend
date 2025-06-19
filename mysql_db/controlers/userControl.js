const db = require('../config/db');

const getAllUsers = (req,res)=>{
    
    const sqlSelect = "SELECT * FROM node_js_testing_table";
    
    db.query(sqlSelect,(error,data)=>{
        
        if(error)
        {
            return res.status(400).json({error:error});
        }

        return res.status(200).json(data);
    })
}

const getUserById = (req,res)=>{

    const id = req.params.id;

    const sqlSelect = "SELECT * FROM node_js_testing_table WHERE id = ?";
    
    try 
    {
        db.query( sqlSelect , [id] , (err,data)=>{

            if(err){
                return res.status(400).json({error:err});
            }

            return res.status(200).json({message:"User fetched!",data});
        } )
    } 
    catch (error) 
    {
        return res.status(400).json({error:error});
    }
    
}

const createUser = (req,res)=>{
    try 
    {
        const sqlInsert = "INSERT INTO node_js_testing_table (name,password) VALUES(?,?)";

        db.query( sqlInsert, [req.body.name,req.body.password] , (error,data)=>{

            if(error){
                return res.status(400).json({error:error});
            }
            else{
                return res.status(200).json({message:"User Created Successfully",data:data});
            }
        })
        
    } 
    catch (error) 
    {
        return res.status(400).json({error:error});
    }
}

const updateUser = (req,res)=>{
    
    try 
    {
        const sqlUpdate = "UPDATE node_js_testing_table SET name = ? , password = ? WHERE id = ?";

        db.query( sqlUpdate, [ req.body.name, req.body.password, req.params.id] , (error,data)=>{

            if(error){
                return res.status(400).json({error:error});
            }
            else{
                return res.status(200).json({message:"User Updated Successfully",data:data});
            }
        })
        
    } 
    catch (error) {
        return res.status(400).json({error:error});
    }
}

const deleteUser = (req,res)=>{
    try 
    {
        const sqlDelete = "DELETE FROM node_js_testing_table WHERE id = ?"

        db.query(sqlDelete, [req.params.id], (error,data)=>{

            if(error){
                return res.status(400).json({error:error});
            }
            else{
                return res.status(200).json({message:"User Deleted Successfully",data:data});
            }
            
        })
    } 
    catch (error) 
    {
        return res.status(400).json({error:error});
    }
}

module.exports = {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser
}