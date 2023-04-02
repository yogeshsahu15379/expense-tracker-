import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddExpense from "./components/AddExpense";

function App() {

  return (
    <BrowserRouter>
      <div className="App">
      <Header />
        <Routes>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Login/>}/>
          <Route path="/expenses" element={<AddExpense/>}/>
        </Routes>
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
