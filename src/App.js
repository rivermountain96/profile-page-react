import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeView from "./views/HomeView";
import NexonView from "./views/NexonView";
import SamsungView from "./views/SamsungView";
import KeepAdminView from "./views/KeepAdminView";
import KeepUserView from "./views/KeepUserView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/nexon" element={<NexonView />} />
        <Route path="/samsung" element={<SamsungView />} />
        <Route path="/keepcoding_admin" element={<KeepAdminView />} />
        <Route path="/keepcoding_user" element={<KeepUserView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
