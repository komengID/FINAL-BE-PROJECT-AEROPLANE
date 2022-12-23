const { airport } = require('../models');

const getAirport = async (req, res) => {
    try {
        const airports = await airport.findAll();
        res.status(200).json({
            message: 'data semua bandara',
            airports,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const getAirplaneById = async (req, res) => {
    try {
        const { id, } = req.params;
        const oneAirport = await airport.findOne({ where: { id, }, });
        res.status(200).json({
            airport: oneAirport,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const addAirport = async (req, res) => {
    try {
        const newAirport = await airport.create(req.body);
        res.status(200).json({
            message: 'data bandara berhasil ditambahkan',
            newAirport,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const updateAirport = async (req, res) => {
    try {
        const { id, } = req.params;
        await airport.update(req.body, { where: { id, }, });
        res.status(200).json({
            message: 'data bandara berhasil diubah',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const deleteAirport = async (req, res) => {
    try {
        const { id, } = req.params;
        await airport.destroy({ where: { id, }, });
        res.status(200).json({
            message: 'data bandara berhasil dihapus',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getAirport,
    getAirplaneById,
    addAirport,
    updateAirport,
    deleteAirport,
};
