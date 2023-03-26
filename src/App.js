import logo from "./logo.svg";
import "./App.css";
import Signup from "./components/Signup";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // const notify = () => toast.success("Wow so easy!");
  // const notifyError = () => toast.error("password not matched")
  return (
    <div className="App">
      <Header />
      <Signup />
      <ToastContainer/>
    </div>
  );
}

export default App;
