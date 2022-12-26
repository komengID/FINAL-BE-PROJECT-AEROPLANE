const { ticket, airport } = require('../models');
const { search } = require('../routes/authRoutes');
const { Op } = require('sequelize');
const Sequelize = require('sequelize');

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

const searchTicketUser = async (req, res) => {
    try {
      const { departure_date, arrival_date, airport_name, airport_location } = req.query;
      const data = await ticket.findAll({
        include: [
          {
            model: airport,
            as: "airport",
            where: {
              airport_name, airport_location
            }
          },
        ],
        where: {
          departure_date,
          arrival_date,
        },
      });
  
      if (data.length > 0) {
        return res.status(200).json({
          data,
        });
      }
      res.status(400).json({
        message: "Ticket not found",
      });
    } catch (error) {
      console.log(error);
    }
  };


module.exports = {
    getTicket,
    getTicketById,
    addTicket,
    updateTicket,
    deleteTicket,
    searchTicketUser,
};
