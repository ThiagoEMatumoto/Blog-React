import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import SobreMim from "./pages/SobreMim/SobreMim";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="/sobremim" element={<SobreMim/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
