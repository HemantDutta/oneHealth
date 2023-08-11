import {BrowserRouter, Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Diagnose} from "./pages/Diagnose";

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path={"/"} element={<Home/>}/>
              <Route path={"/diagnose"} element={<Diagnose/>}/>
          </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
