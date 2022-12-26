const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getBooking,
    getBookingById,
    addBooking,
    updateBooking,
    deleteBooking,
}= require('../controllers/bookingController');


router.get('', getBooking);
router.get('/:id', getBookingById);
router.post('', addBooking);
router.put('/:id', updateBooking);
router.delete('/:id', deleteBooking);

module.exports = router;
