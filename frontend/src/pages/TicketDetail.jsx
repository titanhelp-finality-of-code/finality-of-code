import { useParams } from "react-router-dom";

export default function TicketDetail() {
  const { id } = useParams();
  return <h1>Ticket Detail for ID: {id}</h1>;
}
