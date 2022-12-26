const { booking, ticket, passenger, users } = require('../models');


let getBooking = async (req, res) => {
    
    try {
        let bookings = await booking.findAll(
            {
                include: [
                    {
                        model: ticket
                    },
                    {
                        model: passenger
                    },
                    {
                        model: users
                    },
                ],
            }
        );
        res.status(200).json({
            bookings,
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
                        model: ticket
                    },
                    {
                        model: passenger
                    },
                    {
                        model: users
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
    const {
        id_passenger,
        departureDate,
        arrivalDate,
        classType,
    } = req.body
    try {
        const newBooking = await booking.create({
            id_passenger,
            departureDate,
            arrivalDate,
            classType
        });
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