import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddHadiah = () =>{
    const [sentra, setSentra] = useState({
        nama: "",
        poin: ""
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setSentra((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const handleClick = async (e) =>{
        e.preventDefault() // prevent page refresh
        try {
            const tambah = await axios.post("https://sihpn-server-final-production.up.railway.app/admin/daftar-hadiah/tambah", sentra, {withCredentials: true})
            if(tambah.data.length > 0){
                alert("Hadiah berhasil ditambahkan!")
            }else{
                alert("Hadiah gagal ditambahkan! Masukkan data yang benar!")
            }
            navigate("/admin/daftar-hadiah")
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="container">
            <div className="circleDec"></div>
            <div className="circleDec2"></div>
            <div className="glass">
            <div className="form">
                <h1>Tambah Hadiah</h1>
                <input type="text" placeholder="nama hadiah" onChange={handleChange} name="nama" />
                <input type="number" placeholder="poin" onChange={handleChange} name="poin" />
                <button className="formButton" onClick={handleClick}>Tambah</button>
                <button className="back"><Link to="/admin/daftar-hadiah">Kembali</Link></button>
            </div>
            </div>
        </div>
    )
}

export default AddHadiah;