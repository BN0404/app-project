const User = require('../../models/doctor');
import User from '../../models/doctor'

async function index(req, res) {
    try {
        const users = await User.find();
        res.json(doctors)
    } catch(error){
        res.status(400).json(error)
    }
    
}

async function create(req, res) {
    try {
        //* creating a new user
        const user = await User.create(req.body);
        console.log(doctor);
        res.json(doctor);
    } catch (error) {
        res.status(400).json(error)
    }

}

export const addUser = async (req, res) =>{
    const user = req.body;
    const newUser = new User(user);
    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch(error) {
    res.status(404).json({message:error.message})
    }
}

export const getUser = async (req, res) => {
    try {
        const users = await User.findbyId(req.params.id);
        res.status(200).json(users);
    } catch(error) {
    res.status(404).json({message:error.message})
    }
}

export const editUser = async (req, res) => {
    const users = req.body;
    const editUser = new User(user)
    try {
        await User.updateOne({ _id: req.params.id }, editUser)
        res.status(200).json({message:'Doc edited'})
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        await User.deleteOne({ _id: req.params.id })
        res.status(200).json({message:'Doc deleted'})
    } catch(error){
    res.status(409).json({message: error.message})
    }
}


module.exports = {
    index,
    create
    
};