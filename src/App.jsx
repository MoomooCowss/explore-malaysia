import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";

function App(){
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/packages" element={<Packages/>}></Route>
<<<<<<< HEAD
          <Route path="/about" element={<About/>}></Route>
          {/* REMOVE COMMENT WHEN ALL DONE. throw in your about and contact page here */}
          <Route path="/about" element={<About/>}></Route>
=======
          <Route path="/contact" element={<Contact/>}></Route>
>>>>>>> 0880114e2308b825628135bdfc413d39e6f345cd
        </Routes>
      </main>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
