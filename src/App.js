import "./App.scss";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <Sidebar>
      <Dashboard />
    </Sidebar>
  );
}

export default App;
