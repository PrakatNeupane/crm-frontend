import "./App.css";
import DefaultLayout from "./layout/DefaultLayout";
import AddTicket from "./page/new-ticket/AddTicket.page";

function App() {
  return (
    <div className="App">
      {/* Entry */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
