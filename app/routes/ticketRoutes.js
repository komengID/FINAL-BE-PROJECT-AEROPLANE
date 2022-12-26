const router = require('express').Router();
const auth = require('../../middleware/authentication');
const isAdmin = require('../../middleware/isAdmin');
const {
    getTicket,
    addTicket,
    getTicketById,
    updateTicket,
    deleteTicket,
    searchTicketUser,
} = require('../controllers/ticketController');

router.get('', getTicket);
router.get('/search', searchTicketUser);
router.get('/:id', getTicketById);
router.post('', auth, isAdmin, addTicket);
router.put('/:id', auth, isAdmin, updateTicket);
router.delete('/:id', auth, isAdmin, deleteTicket);

module.exports = router;
