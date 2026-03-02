import TicketRow from "../components/TicketRow";
const mockTickets = [
  {
    inc_id: 1,
    short_des: "Printer not working",
    priority_id: 1,
    state_id: 1001,
    added_ts: "2026-03-01 10:00:00",
  },
];
export default function TicketList() {
  return (
    <div>
      <h1>All Tickets</h1>
      <table border="1" cellPadding="8" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>ID</th> <th>Short Description</th> <th>Priority</th>
            <th>State</th> <th>Created</th>
          </tr>
        </thead>
        <tbody>
          {mockTickets.map((ticket) => (
            <TicketRow key={ticket.inc_id} ticket={ticket} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
