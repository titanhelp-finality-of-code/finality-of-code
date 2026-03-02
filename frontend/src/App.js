import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TicketList from "./pages/TicketList";
import TicketForm from "./pages/TicketForm";
import TicketDetail from "./pages/TicketDetail";
import MyTickets from "./pages/MyTickets";
function App() {
  return (
    <Router>
      {" "}
      <Routes>
        {" "}
        <Route path="/tickets" element={<TicketList />} />{" "}
        <Route path="/tickets/new" element={<TicketForm />} />{" "}
        <Route path="/tickets/:id" element={<TicketDetail />} />{" "}
        <Route path="/my-tickets" element={<MyTickets />} />{" "}
      </Routes>{" "}
    </Router>
  );
}
export default App;

console.log("App rendered");