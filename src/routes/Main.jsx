import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";

const Main = ({ setisLogged }) => {
  return (
    <Routes>
      <Route exact path={"/"} element={<Login setisLogged={setisLogged} />}>
        <Route
          exact
          path={"login"}
          element={<Login setisLogged={setisLogged} />}
        />
      </Route>
    </Routes>
  );
};

export default Main;
