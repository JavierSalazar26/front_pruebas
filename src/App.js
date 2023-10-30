import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./routes/Main";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path={"/"} element={<Main />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
