import { userModel } from '../models/userModels.js'

//Create new user
export const createUser = async(req, res)=>{
    try {

        const {name,age,gender,email} = req.body
        if(!name || !age || !gender || !email){
            return  res.status(401).json({message:"Please enter all fields"})
        }

        const newUser = new userModel( {
            name, age, gender, email
        })

        await newUser.save()
        res.status(200).json(newUser)
        
    } catch (error) {
        res.status(404).json({message: "Error!"})
    }
}


//Get all user's data
export const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find()
        if(!users){
            return res.status(500).json({message: "No users found"})
        }

        res.status(200).json(users)
        
    } catch (error) {
        res.status(404).json({message: error.message})
        
    }
}

//Search user by id

export const getUserById = async (req, res) => {
    try {
        const user = await userModel.findById(req.params.id)
        if(!user){
            return res.status(403).json({ message : 'Id not found'})
        }

        res.status(200).json(user)

    } catch (error) {
        res.status(404).json({message: "Error"})
    }
}


//Search user by age
export const getUserByAge = async (req, res) => {
    try {
        const { age } = req.params;
        const user = await userModel.findOne({ age });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

//Update user data

export const updateUser = async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id)
        if(!user){
            return res.status(403).json({message: "User not found!"})
        }
        user = await userModel.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            useFindAndModify: false,
            runValidators: true,
          });

        res.status(200).json({
            success : true,
            user
        })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

//Delete user data

export const deleteUser = async (req, res) => {
    try {
        let user = await userModel.findById(req.params.id)
        if(!user){
            return res.status(403).json({message: "User not found!"})
        }
        user = await userModel.findByIdAndDelete(req.params.id);

        res.status(200).json({
            success : true,
            message : "User deleted successfully!"
        })
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}