import "./App.css";
import Home from "./pages/Home/Home.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About/About.jsx";
import Vans from "./pages/Vans/Vans.jsx";
import VanDeail from "./pages/VanDetail/VanDetail.jsx";
import Layout from "./components/Layout.jsx";
import Dasboard from "./pages/Host/Dashboard/Dashboard.jsx";
import Income from "./pages/Host/Income/Income.jsx";
import Reviews from "./pages/Host/Reviews/Reviews.jsx";
import HostLayout from "./components/HostLayout.jsx";
import HostVans from "./pages/Host/HostVans/HostVans.jsx";
import HostVanDetail from "./pages/Host/HostVanDetail/HostVanDetail.jsx";
import HostVanPricing from "./pages/Host/HostVanPricing/HostVanPricing.jsx";
import HostVanPhotos from "./pages/Host/HostVanPhotos/HostVanPhotos.jsx";
import HostVanInfo from "./pages/Host/HostVanInfo/HostVanInfo.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDeail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dasboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />

            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path='pricing' element={<HostVanPricing />} />
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
