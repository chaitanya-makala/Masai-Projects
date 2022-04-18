import { Routes, Route } from "react-router-dom";
import { List } from "./components/List.jsx";
import { Details } from "./components/Details";
import { Navbar } from "./components/Navbar";
import { Manager } from "./components/Manager";
import { Login } from "./components/Login";
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<List />}>
          {" "}
        </Route>
        <Route exact path="/flat/:id" element={<Details />}>
          {" "}
        </Route>

        <Route exact path="/flat/?keyword=:search" element={<Details />}>
          {" "}
        </Route>

        <Route exact path="/manager" element={<Manager />}>
          {" "}
        </Route>
        <Route exact path="/login" element={<Login />}>
          {" "}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
