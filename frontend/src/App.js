import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import Controller from "./component/Controller/Controller";
import Game from "./component/Game/Game";
import Main from "./component/Main/Main";
import "./App.css";

const socket = io.connect("http://localhost:3001");

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="game" element={<Game socket={socket} />} />
          <Route path="controller" element={<Controller socket={socket} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
