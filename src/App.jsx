import Home from "./pages/Home/Home";
import Navbar from "./pages/navbar";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="">
        <Navbar />
        <Home />
      </div>
    </Router>
  );
}

export default App;