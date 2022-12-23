const router = require('express').Router();
const {
    getAirports,
    getAirportById,
    addAirports
} = require('../controllers/airportController');

// middleware
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');

router.get('/airport', getAirports);
router.get('/airport/:id', getAirportById);
router.post('/airport', addAirports);

module.exports = router;