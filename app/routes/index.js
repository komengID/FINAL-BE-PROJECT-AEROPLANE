const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const router = express.Router();
const authRoutes = require('./authRoutes');
const airportRoutes = require('./airportRoutes');
const ticketRoutes = require('./ticketRoutes');
const passengerRoutes = require('./passengerRoutes');
const bookingRoutes = require('./bookingRouter');

//API routes
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// // API Auth Login
router.use('/api', authRoutes)
router.use('/api/airports', airportRoutes)
router.use('/api/passengers', passengerRoutes)
router.use('/api/tickets', ticketRoutes)
router.use('/api/bookings', bookingRoutes)

// router.get('/user',authenticate,user)

module.exports = router
