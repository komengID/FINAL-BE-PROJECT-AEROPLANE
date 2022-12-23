const { airport, } = require('../models');
const apiError = require('../utils/apiError');

const getAirports = async (req, res) => {
    try {
        const Airports = await airport.findAll();
        res.status(200).json({
            message: "Success get airports",
            Airports,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({ 
            message: error.message
        });
    }
}

getAirportById = async (req, res) => {
    try {
        const { id } = req.params;
        const airportById = await airport.findByPk(id);
        if (!airportById) {
            throw new apiError("Airport not found", 404);
        }
        res.status(200).json({
            message: "Success get airport by id",
            airportById,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
}

const addAirports = async (req, res) => {
    try {
        const newAirport = await airport.create(req.body);
        res.status(200).json({
            message: "Success add airport",
            newAirport,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({ 
            message: error.message
        });
    }
}

const updateAirport = async (req, res) => {
    try {
        const { id } = req.params;
        const airportById = await airport.findByPk(id);
        if (!airportById) {
            throw new apiError("Airport not found", 404);
        }
        const updatedAirport = await airport.update(req.body, {
            where: {
                id,
            },
        });
        res.status(200).json({
            message: "Success update airport",
            updatedAirport,
        });
    }
    catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
}

module.exports = {
    getAirports,
    getAirportById,
    addAirports,
    updateAirport,  
}