import { Link } from "react-router-dom";

export default function TicketRow({ ticket }) {
  return (
    <tr>
      <td>
        <Link to={`/tickets/${ticket.inc_id}`}> {ticket.inc_id} </Link>
      </td>
      <td>{ticket.short_des}</td> 
      <td>{ticket.priority_id}</td>
      <td>{ticket.state_id}</td> 
      <td>{ticket.added_ts}</td>
    </tr>
  );
}
