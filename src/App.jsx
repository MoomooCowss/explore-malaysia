import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Packages from "./pages/Packages";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App(){
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/packages" element={<Packages/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>
      </main>
    <Footer />
    </BrowserRouter>
  );
}
export default App;
