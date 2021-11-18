
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import SearchBar from "./components/SearchBar/SearchBar";
import Sidebar from "./modules/Sidebar";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={<Sidebar>
      <Main />
    </Sidebar>}></Route>
        <Route exact path="/" element={<SearchBar />}></Route>
        <Route path="/login" element={<Home variant="Login" />}></Route>
        <Route path="/signup" element={<Home variant="SignUp" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
