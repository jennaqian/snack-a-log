import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home.js"
import Navbar from "./Components/Navbar.js"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </Router>
  );
}

export default App;
