const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getBooking,
    bookingsUser,
    getBookingById,
    addBooking,
    updateBooking,
    deleteBooking,
}= require('../controllers/bookingController');


router.get('', auth, getBooking);
router.get('/user', auth, bookingsUser);
router.get('/:id', auth, getBookingById);
router.post('', auth, addBooking);
router.put('/:id', auth, updateBooking);
router.delete('/:id', auth, deleteBooking);

module.exports = router;
