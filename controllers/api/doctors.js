const Doctor = require('../../models/doctor');


async function index(req, res) {
    try {
        const doctors = await Doctor.find();
        res.json(doctors)
    } catch(error){
        res.status(400).json(error)
    }
    
}

async function create(req, res) {
    try {
        //* creating a new user
        const doctor = await Doctor.create(req.body);
        console.log(doctor);
        res.json(doctor);
    } catch (error) {
        res.status(400).json(error)
    }

}


module.exports = {
    index,
    create
    
};