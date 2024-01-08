// import Navbar from './Navbar';
// import Home from './Home';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FormLogin from "./Login/FormLogin";
import Landingpage from "./Landingpage/Landingpage";

function App() {
  // const title = "Welcome to the new blog";
  // const likes = 50;
  return (

    <Router>
      <Routes>
        
          <Route path="/" element={<FormLogin />} />
          <Route path="/Landingpage/Landingpage" element={<Landingpage />} />
        
      </Routes>
    </Router>

  );
}

export default App;
