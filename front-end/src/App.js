import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home.js"
import Navbar from "./Components/Navbar.js"
import Snacks from "./Components/Snacks.js"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/snacks" element={<Snacks />}/>
      </Routes>
    </Router>
  );
}

export default App;
