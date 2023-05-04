const User1 = require('../../models/doctor');
// import User from '../../models/doctor'

async function index(req, res) {
    try {
        const users = await User1.find();
        res.json(users)
    } catch(error){
        res.status(400).json(error)
    }
    
}

async function create(req, res) {
    try {
        //* creating a new user
        const user = await User1.create(req.body);
        console.log(user);
        res.json(user);
    } catch (error) {
        res.status(400).json(error)
    }

}

async function addUser(req, res) {
    const user = req.body;
    console.log(user)
    const newUser = new User1(user);
    try {
        await newUser.save()
        res.status(200).json(newUser)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

async function getUsers(req, res) {
    try {
        const users = await User1.find({});
        res.status(200).json(users);
    } catch(error) {
    res.status(400).json({message:error.message})
    }
}

async function getUser(req, res){
    try {
        const users = await User1.findById(req.params.id);
        res.status(200).json(users);
    } catch(error) {
    res.status(400).json({message:error.message})
    }
}

async function editUser(req, res) {
    console.log(req.body)
    // const users = req.body;
    // const editUser = await User1.findById(req.params.id)
    try { 
        await User1.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({message:'Doc edited'})
    } catch (error) {
        res.status(400).json({ message: error.message })    
    }
}

async function deleteUser(req, res) {
    try {
        await User1.deleteOne({ _id: req.params.id })
        res.status(200).json({message:'Doc deleted'})
    } catch(error){
    res.status(409).json({message: error.message})
    }
}


module.exports = {
    index,
    create,
    deleteUser,
    getUser,
    getUsers,
    editUser,
    addUser
    
};