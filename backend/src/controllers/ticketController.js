// Application Layer: HTTP request/response handling — delegates to ticketService
const ticketService = require("../services/ticketService");

const ticketController = {

    getAllTickets: async (req, res) => {
        try {
            const tickets = await ticketService.getAllTickets();
            res.json(tickets);
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    },

    getTicketById: async (req, res) => {
        try {
            const ticket = await ticketService.getTicketById(req.params.id);
            res.json(ticket);
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    },

    createTicket: async (req, res) => {
        try {
            const newTicket = await ticketService.createTicket(req.body);
            res.status(201).json(newTicket);
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    },

    updateTicket: async (req, res) => {
        try {
            const updatedTicket = await ticketService.updateTicket(req.params.id, req.body);
            res.json(updatedTicket);
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    },

    deleteTicket: async (req, res) => {
        try {
            await ticketService.deleteTicket(req.params.id);
            res.status(200).json({ message: "Ticket deleted successfully" });
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    },

    searchTickets: async (req, res) => {
        try {
            const results = await ticketService.searchTickets(req.query.term);
            res.json(results);
        } catch (error) {
            res.status(error.status || 500).json({ error: error.message });
        }
    }
};

module.exports = ticketController;
