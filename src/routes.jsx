import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import SobreMim from "./pages/SobreMim/SobreMim";
import NotFound from "./pages/NotFound/NotFound";
import Menu from "./components/Menu/Menu";
import Rodape from "./components/Rodape/Rodape";
import PagPadrao from "./components/PagPadrao/PagPadrao";
import Post from "./pages/PostPage/Post";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function AppRoutes() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
      <Menu />

      <Routes>
        <Route path="/" element={<PagPadrao />}>
          <Route index element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
        </Route>

        <Route path="posts/:id/*" element={<Post/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
