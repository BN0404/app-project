const express = require('express');
const router = express.Router();
const doctorsCtrl = require('../../controllers/api/doctors');
const ensureLoggedIn = require('../../config/ensureLoggedIn')


router.post('/', doctorsCtrl.create);

router.get('/', doctorsCtrl.index);

// router.put('/:id', doctorsCtrl.update);

// router.delete('/:id', doctorsCtrl.delete);




module.exports = router;