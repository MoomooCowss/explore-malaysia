import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './pages/Home';
import Packages from "./pages/Packages";
import About from "./pages/About";

function App(){
  return (
    <BrowserRouter>
    <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/packages" element={<Packages/>}></Route>
          <Route path="/about" element={<About/>}></Route>
          {/* REMOVE COMMENT WHEN ALL DONE. throw in your about and contact page here */}
        </Routes>
      </main>
    <Footer />
    </BrowserRouter>
  );
}
export default App;