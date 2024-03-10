import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Archives from "./pages/Archives";
import OurStory from "./pages/OurStory";
import Home from "./pages/Home";
import TeleRadio from "./pages/Teleradio";

import style from "App.css";
import "./output.css";

function App() {
  return (
    <body>
      <div>
        <Router>
          <Header />
          <Routes>
            <Route path="/Home" element={<Home />} />
            <Route path="/TeleRadio" element={<TeleRadio />} />
            <Route path="/OurStory" element={<OurStory />} />
            <Route path="/Archives" element={<Archives />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </body>
  );
}
export default App;
