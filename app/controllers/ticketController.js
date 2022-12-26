const { ticket, airport } = require('../models');
const { search } = require('../routes/authRoutes');
const { Op } = require('sequelize');

const getTicket = async (req, res) => {
    try {
        const tickets = await ticket.findAll({
            include: [
                {
                    model: airport
                },
            ],
        });
        res.status(200).json({
            tickets,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const getTicketById = async (req, res) => {
    try {
        const { id, } = req.params;
        const getTicket = await ticket.findOne(
            {
                where: { id, },
            },
            {
                include: [
                    {
                        model: airport
                    },
                ],
            }
        );
        res.status(200).json({
            ticket: getTicket,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const addTicket = async (req, res) => {
    try {
        const newTicket = await ticket.create(req.body);
        res.status(200).json({
            message: 'tiket berhasil ditambahkan',
            newTicket,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const updateTicket = async (req, res) => {
    try {
        const { id, } = req.params;
        await ticket.update(req.body, { where: { id, }, });
        res.status(200).json({
            message: 'tiket berhasil diubah',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const deleteTicket = async (req, res) => {
    try {
        const { id, } = req.params;
        await ticket.destroy({ where: { id, }, });
        res.status(200).json({
            message: 'tiket berhasil dihapus',
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};

const searchTicket = async (req, res) => {
    try {
        const {
            departure_date,
            arrival_date,
            class: classTicket,
            price,
            airport_name,
            airport_location,
        } = req.body;
        console.log(req.body);
        const departure = await airport.findAll({
            where: {
                airport_name,
                // airport_location: {
                //     [Op.like]: `%${airport_location}%`,
                // }, 
            },
            include: [
                {
                    model: ticket
                },
            ],
        });
        console.log(departure);
        const arrival = await airport.findAll({
            where: {
                airport_name: {
                    [Op.like]: `%${airport_name}%`,
                },
                airport_location: {
                    [Op.like]: `%${airport_location}%`,
                },
            },
            include: [
                {
                    model: ticket
                },
            ],
        });
        const departureDate = await ticket.findAll({
            where: {
                departure_date,
            },
            include: [
                {
                    model: airport
                },
            ],
        });
        const arrivalDate = await ticket.findAll({
            where: {
                arrival_date,
            },
            include: [
                {
                    model: airport
                },
            ],
        });
        const classTickets = await ticket.findAll({
            where: {
                class: {
                    [Op.like]: `%${classTicket}%`,
                },
            },
            include: [
                {
                    model: airport
                },
            ],
        });
        const prices = await ticket.findAll({
            where: {
                price,
            },
            include: [
                {
                    model: airport
                },
            ],
        }); 
        res.status(200).json({
            departure,
            arrival,
            departureDate,
            arrivalDate,
            classTickets,
            prices,
        });
    } catch (error) {
        res.status(error.statusCode || 500).json({
            message: error.message,
        });
    }
};


module.exports = {
    getTicket,
    getTicketById,
    addTicket,
    updateTicket,
    deleteTicket,
    searchTicket,
};
