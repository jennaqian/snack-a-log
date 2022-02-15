import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./Components/Home.js"
import Navbar from "./Components/Navbar.js"
import Snacks from "./Components/Snacks.js"
import SnackDetails from "./Components/SnackDetails.js"
import NewSnack from "./Components/NewSnack.js"
import EditSnack from "./Components/EditSnack.js"

function App() {
  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/snacks" element={<Snacks />}/>
          <Route path="/snacks/:id" element={<SnackDetails />} />
          <Route path="/snacks/new" element={<NewSnack />} />
          <Route path="snacks/:id/edit" element={<EditSnack />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
