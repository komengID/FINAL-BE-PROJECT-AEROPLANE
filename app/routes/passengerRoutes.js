const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getPassenger,
    getPassengerById,
    addPassenger,
    updatePassenger,
    deletePassenger,
} = require('../controllers/passengerController')

router.get('/', auth, getPassenger);
router.get('/:id', auth, getPassengerById);
router.post('/', auth, addPassenger);
router.put('/:id', auth, isAdmin, updatePassenger);
router.delete('/:id', auth, isAdmin, deletePassenger);

module.exports = router;