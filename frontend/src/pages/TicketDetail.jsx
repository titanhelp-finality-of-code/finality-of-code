import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function TicketDetail() {
  const { id } = useParams();

  // Mock data for now
  const mockTicket = {
    inc_id: id,
    short_des: "Printer not working",
    lond_des:
      "The printer in the main office is not responding. Tried restarting it twice.",
    priority_id: 1,
    state_id: 1001,
    user_id: 1100001,
    added_ts: "2026-03-01 10:00:00",
    mod_ts: "2026-03-01 10:30:00",
  };

  const [ticket, setTicket] = useState(null);

  useEffect(() => {
    // Later: fetch(`/api/incidents/${id}`)
    // For now: simulate loading
    setTicket(mockTicket);
  }, [id]);

  if (!ticket) return <p>Loading ticket...</p>;

  return (
    <div style={{ maxWidth: "700px", margin: "0 auto" }}>
      <h1>Ticket #{ticket.inc_id}</h1>

      <div style={{ marginTop: "20px" }}>
        <p>
          <strong>Short Description:</strong> {ticket.short_des}
        </p>
        <p>
          <strong>Long Description:</strong> {ticket.lond_des}
        </p>
        <p>
          <strong>Priority:</strong> {ticket.priority_id}
        </p>
        <p>
          <strong>State:</strong> {ticket.state_id}
        </p>
        <p>
          <strong>User ID:</strong> {ticket.user_id}
        </p>
        <p>
          <strong>Created:</strong> {ticket.added_ts}
        </p>
        <p>
          <strong>Last Modified:</strong> {ticket.mod_ts}
        </p>
      </div>

      <Link to={`/tickets/${ticket.inc_id}/edit`}>
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#1e1e1e",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Edit Ticket
        </button>
      </Link>
    </div>
  );
}
