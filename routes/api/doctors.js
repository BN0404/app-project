const express = require('express');
const router = express.Router();
const doctorsCtrl = require('../../controllers/api/doctors');
const ensureLoggedIn = require('../../config/ensureLoggedIn')

import { get } from 'mongoose';
import {addUser, getUsers, getUser, editUser} from 
router.post('/', doctorsCtrl.create);
import { deleteUser, editUser } from '../../src/utilities/doctorform-api';

router.post('/add', addUser);
router.get('/', doctorsCtrl.index);
router.get('/all', getUsers)
router.get('./:id', getUser)
router.put('./:id', editUser)
router.delete('./:id', deleteUser)

// router.put('/:id', doctorsCtrl.update);

// router.delete('/:id', doctorsCtrl.delete);




module.exports = router;