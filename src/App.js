import "./App.scss";
import Sidebar from "./modules/Sidebar";
import Main from "./pages/Main";

function App() {
  return (
    <Sidebar>
      <Main />
    </Sidebar>
  );
}

export default App;
