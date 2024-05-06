import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Karateka from "./pages/Karateka.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/karateka" element={<Karateka />} />
      </Routes>
    </Router>
  );
}

export default App;
