
import "./App.css";
import "./Assets/font-awesome/css/font-awesome.min.css";
import Register from "./component/Register/Register";
import Login from "./component/Login/Login";
import SearchBook from "./component/SearchBook/SearchBook";
import About from "./component/About/About";
import AddBook from "./component/AddBook/AddBook";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<Register />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="searchbook" element={<SearchBook />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="addBook" element={<AddBook />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
