const express = require('express');

const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../swagger.json');
const router = express.Router();
const authRoutes = require('./authRoutes');
const airportRoutes = require('./airportRoutes');

//API routes
router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// // API Auth Login
router.use('/api',authRoutes)
router.use('/api',airportRoutes)
// router.get('/user',authenticate,user )

module.exports = router
