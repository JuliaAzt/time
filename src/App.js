import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home/Home";
import SearchBar from "./components/SearchBar/SearchBar";
function App() {
  let loggedIn = false;
  /*<Route exact path="/">
    {loggedIn ? <h1>Entrou</h1> : <Redirect to="/login" />}
  </Route>*/
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<SearchBar />}></Route>
        <Route path="/login" element={<Home variant="Login" />}></Route>
        <Route path="/signup" element={<Home variant="SignUp" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
