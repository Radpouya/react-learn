import './App.css';
import Home from "./pages/Home/Home.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About/About.jsx";
import Header from "./components/Header/Header.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}
