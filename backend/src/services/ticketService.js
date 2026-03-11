// Application Layer: Business logic and validation for ticket operations
const { Incident, Priority, State, UserAdmin } = require("../models");
const { Op } = require("sequelize");

function serviceError(message, status) {
    const err = new Error(message);
    err.status = status;
    return err;
}

const ticketService = {

    getAllTickets: async () => {
        return await Incident.findAll({
            include: [
                { model: Priority, attributes: ["priority_type", "sla_time"] },
                { model: State,    attributes: ["state_type"] },
                { model: UserAdmin, attributes: ["first_name", "last_name"] }
            ],
            order: [["added_ts", "DESC"]]
        });
    },

    getTicketById: async (id) => {
        const ticket = await Incident.findByPk(id, {
            include: [Priority, State, UserAdmin]
        });
        if (!ticket) throw serviceError("Ticket not found", 404);
        return ticket;
    },

    createTicket: async (data) => {
        const { short_des, long_des, priority_id, state_id, user_id } = data;

        if (!short_des || short_des.trim().length === 0)
            throw serviceError("short_des is required", 400);
        if (short_des.length > 100)
            throw serviceError("short_des must be 100 characters or less", 400);

        if (!long_des || long_des.trim().length === 0)
            throw serviceError("long_des is required", 400);
        if (long_des.length > 1000)
            throw serviceError("long_des must be 1000 characters or less", 400);

        if (!priority_id) throw serviceError("priority_id is required", 400);
        if (!state_id)    throw serviceError("state_id is required", 400);
        if (!user_id)     throw serviceError("user_id is required", 400);

        return await Incident.create({ short_des, long_des, priority_id, state_id, user_id });
    },

    updateTicket: async (id, data) => {
        const { short_des, long_des } = data;

        if (short_des !== undefined) {
            if (short_des.trim().length === 0)
                throw serviceError("short_des cannot be empty", 400);
            if (short_des.length > 100)
                throw serviceError("short_des must be 100 characters or less", 400);
        }
        if (long_des !== undefined) {
            if (long_des.trim().length === 0)
                throw serviceError("long_des cannot be empty", 400);
            if (long_des.length > 1000)
                throw serviceError("long_des must be 1000 characters or less", 400);
        }

        const [updated] = await Incident.update(data, { where: { inc_id: id } });
        if (!updated) throw serviceError("Ticket not found", 404);
        return await Incident.findByPk(id);
    },

    deleteTicket: async (id) => {
        const deleted = await Incident.destroy({ where: { inc_id: id } });
        if (!deleted) throw serviceError("Ticket not found", 404);
    },

    searchTickets: async (term) => {
        if (!term || term.trim().length === 0)
            throw serviceError("Search term is required", 400);

        return await Incident.findAll({
            where: {
                [Op.or]: [
                    { short_des: { [Op.like]: `%${term}%` } },
                    { long_des:  { [Op.like]: `%${term}%` } }
                ]
            },
            include: [Priority, State, UserAdmin]
        });
    }
};

module.exports = ticketService;
