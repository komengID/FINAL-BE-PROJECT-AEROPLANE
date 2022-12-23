const router = require('express').Router();
const {
    getAirports,
    getAirportById,
    addAirports,
    updateAirport
} = require('../controllers/airportController');

// middleware
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');

router.get('/airport', getAirports);
router.get('/airport/:id', getAirportById);
router.post('/airport', addAirports);
router.put('/airport/:id', updateAirport);

module.exports = router;