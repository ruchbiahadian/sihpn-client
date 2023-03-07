import {BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sentra from "./pages/Sentra";
import AddSentra from "./pages/AddSentra";
import UpdateSentra from "./pages/UpdateSentra";
import Nasabah from "./pages/Nasabah";
import AddNasabah from "./pages/Add.Nasabah";
import HadiahNasabah from "./pages/HadiahNasabah";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Hadiah from "./pages/Hadiah";
import AddHadiah from "./pages/AddHadiah";
import UpdateHadiah from "./pages/UpdateHadiah";
import UpdateAdmin from "./pages/UpdateAdmin";
import "./style.css";






function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/admin/sentra" element={<Sentra/>} />
          <Route path="/admin/sentra/tambah" element={<AddSentra/>} />
          <Route path="/admin/sentra/update/:id" element={<UpdateSentra/>} />
          <Route path="/admin/nasabah" element={<Nasabah/>} />
          <Route path="/admin/nasabah/tambah" element={<AddNasabah/>} />
          <Route path="/admin/nasabah/hadiah/:id" element={<HadiahNasabah/>} />
          <Route path="/admin/daftar-hadiah" element={<Hadiah/>} />
          <Route path="/admin/daftar-hadiah/tambah" element={<AddHadiah/>} />
          <Route path="/admin/daftar-hadiah/update/:id" element={<UpdateHadiah/>} />
          <Route path="/admin/update" element={<UpdateAdmin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}



export default App;
