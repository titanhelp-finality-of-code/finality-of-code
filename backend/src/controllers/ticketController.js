// Application Layer: Implement controller logic here
const { Incident, Priority, State, UserAdmin } = require("../models");
const { Op } = require("sequelize"); // Import operators for searching

const ticketController = {
    // 1. Get all tickets with their related data (Eager Loading)
    getAllTickets: async (req, res) => {
        try {
            const tickets = await Incident.findAll({
                include: [
                    { model: Priority, attributes: ["priority_type", "sla_time"] },
                    { model: State, attributes: ["state_type"] },
                    { model: UserAdmin, attributes: ["first_name", "last_name"] }
                ],
                order: [["added_ts", "DESC"]] // Newest tickets first
            });
            res.json(tickets);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // 2. Get a single ticket by ID
    getTicketById: async (req, res) => {
        try {
            const ticket = await Incident.findByPk(req.params.id, {
                include: [Priority, State, UserAdmin]
            });
            if (!ticket) {
                return res.status(404).json({ message: "Ticket not found" });
            }
            res.json(ticket);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // 3. Create a new ticket
    createTicket: async (req, res) => {
        try {
            // req.body should contain short_des, lond_des, priority_id, state_id, user_id
            const newTicket = await Incident.create(req.body);
            res.status(201).json(newTicket);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    // 4. Update an existing ticket (e.g., changing status or priority)
    updateTicket: async (req, res) => {
        try {
            const { id } = req.params;
            const [updated] = await Incident.update(req.body, {
                where: { inc_id: id }
            });

            if (updated) {
                const updatedTicket = await Incident.findByPk(id);
                return res.json(updatedTicket);
            }
            res.status(404).json({ message: "Ticket not found" });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // 5. Delete a ticket
    deleteTicket: async (req, res) => {
        try {
            const deleted = await Incident.destroy({
                where: { inc_id: req.params.id }
            });
            if (deleted) {
                res.status(200).json({ message: "Ticket deleted successfully" });
            } else {
                res.status(404).json({ message: "Ticket not found" });
            }
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    // 6. Search tickets by keyword in short_des or long_des
    searchTickets: async (req, res) => {
        try {
            const { term } = req.query; // Expects /api/incidents/search?term=keyword

            const results = await Incident.findAll({
                where: {
                    [Op.or]: [
                        { short_des: { [Op.like]: `%${term}%` } },
                        { long_des: { [Op.like]: `%${term}%` } }
                    ]
                },
                include: [Priority, State, UserAdmin]
            });

            res.json(results);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },
};

module.exports = ticketController;