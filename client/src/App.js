import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Diagnose} from "./pages/Diagnose";
import {Dashboard} from "./pages/Dashboard";
import {About} from "./pages/About";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/diagnose"} element={<Diagnose/>}/>
              <Route path={"/dashboard"} element={<Dashboard/>}/>
              <Route path={"/about"} element={<About/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
