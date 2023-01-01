const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getAirport,
    getAirplaneById,
    addAirport,
    updateAirport,
    deleteAirport,
} = require('../controllers/airportController');

router.get('/', auth, getAirport);
router.get('/:id', auth, getAirplaneById);
router.post('/', auth, isAdmin, addAirport);
router.put('/:id', auth, isAdmin, updateAirport);
router.delete('/:id', auth, isAdmin, deleteAirport);

module.exports = router;
