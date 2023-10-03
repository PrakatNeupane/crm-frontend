import "./App.css";
import AddTicket from "./page/new-ticket/AddTicket.page";
import TicketLists from "./page/ticket-listing/TicketLists.page";
import Ticket from "./page/ticket/Ticket.page";
import Dashboard from "./page/dashboard/Dashboard.page";
import Entry from "./page/entry/Entry.page";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/private-route/PrivateRoute.comp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Entry />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-ticket"
            element={
              <PrivateRoute>
                <AddTicket />
              </PrivateRoute>
            }
          />
          <Route
            path="/tickets"
            element={
              <PrivateRoute>
                <TicketLists />
              </PrivateRoute>
            }
          />
          <Route
            path="/ticket/:tid"
            element={
              <PrivateRoute>
                <Ticket />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
