const { Airplane,} = require('../models');

const getAirplanes = async (req, res) => {
    try {
        const airplanes = await Airplane.findAll();
        res.send(airplanes);
    } catch (error) {
        res.status(error.statusCode || 500).json({ 
            message: error.message
        });
    }
}