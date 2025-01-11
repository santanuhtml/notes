import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/404/NotFound";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Mission from './components/Mission/Mission.jsx';
import Vision from './components/Vision/Vision.jsx';
import Career from "./components/Career/Career.jsx";
import User from "./components/User/User.jsx";

function App(){
  return(
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/about/career" element={<Career/>} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vision />} />
          <Route path="/user/:userid" element={<User />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App;