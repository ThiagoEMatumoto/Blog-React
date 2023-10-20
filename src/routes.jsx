import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import SobreMim from "./pages/SobreMim/SobreMim";
import NotFound from "./pages/NotFound/NotFound";
import Menu from "./components/Menu/Menu";
import Rodape from "./components/Rodape/Rodape";



function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobremim" element={<SobreMim />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      
      <Rodape/>
    </BrowserRouter>
  );
}

export default AppRoutes;
