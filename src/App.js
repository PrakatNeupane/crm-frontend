import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import AddTicket from "./page/new-ticket/AddTicket.page";
import TicketLists from "./page/ticket-listing/TicketLists.page";

function App() {
  return (
    <div className="App">
      {/* Entry */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        <TicketLists />
      </DefaultLayout>
    </div>
  );
}

export default App;
