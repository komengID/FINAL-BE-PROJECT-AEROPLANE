const { booking, ticket, pessengger, user } = require('../models');


const getBooking = async (req, res) => {
    try {
        const booking = await booking.findAll(
            {
                include: [
                    {
                        model: {ticket,pessengger,user}
                    },
                ],
            }
        );
        res.status(200).json({
            booking,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};


const getBookingById = async (req, res) => {
    try {
        const { id, } = req.params;
        const getBooking = await booking.findOne(
            {
                where: { id, },
            },
            {
                include: [
                    {
                        model: {ticket,pessengger,user}
                    },
                ],
            }
        );
        res.status(200).json({
            booking: getBooking,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};


const addBooking = async (req, res) => {
    try {
        const newBooking = await booking.create(req.body);
        res.status(200).json({
            message: 'Booking berhasil ditambahkan',
            newBooking,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const updateBooking = async (req, res) => {
    try {
        const { id, } = req.params;
        await booking.update(req.body, { where: { id, }, });
        res.status(200).json({
            message: 'Booking berhasil diubah',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const deleteBooking = async (req, res) => {
    try {
        const { id, } = req.params;
        await booking.destroy({ where: { id, }, });
        res.status(200).json({
            message: 'Booking berhasil dihapus',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

module.exports = {
    getBooking,
    getBookingById,
    addBooking,
    updateBooking,
    deleteBooking,
};