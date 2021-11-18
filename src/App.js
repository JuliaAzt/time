import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home";
import Sidebar from "./modules/Sidebar";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Sidebar>
              <Outlet />
            </Sidebar>
          }
        >
          <Route exact path="/" element={<Main />} />
        </Route>

        <Route path="/login" element={<Home variant="Login" />}></Route>
        <Route path="/signup" element={<Home variant="SignUp" />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
