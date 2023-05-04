const express = require('express');
const router = express.Router();
const doctorsCtrl = require('../../controllers/api/doctors');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// import { get } from 'mongoose';
// const { addUser, getUsers, getUser, editUser, deleteUser } = require('../../src/utilities/doctorForm-api');
router.post('/', doctorsCtrl.create);
// const { deleteUser, editUser } = require('../../src/utilities/doctorForm-api') ;

router.post('/add', doctorsCtrl.addUser);
router.get('/', doctorsCtrl.index);
router.get('/all', doctorsCtrl.getUsers)
router.get('/:id', doctorsCtrl.getUser)
router.put('/:id', doctorsCtrl.editUser)
router.delete('/:id', doctorsCtrl.deleteUser)

// router.put('/:id', doctorsCtrl.update);

// router.delete('/:id', doctorsCtrl.delete);

module.exports = router;