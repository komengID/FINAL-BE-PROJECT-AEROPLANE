const { ticket, airport } = require('../models');

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

module.exports = {
    getTicket,
    getTicketById,
    addTicket,
    updateTicket,
    deleteTicket,
};
