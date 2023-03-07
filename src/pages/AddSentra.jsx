import axios from "axios";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Add = () =>{
    const [sentra, setSentra] = useState({
        nama: ""
    });

    const navigate = useNavigate()

    const handleChange = (e) =>{
        setSentra((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const handleClick = async (e) =>{
        e.preventDefault() // prevent page refresh
        try {
            await axios.post("http://localhost:8800/admin/sentra/tambah", sentra, {withCredentials: true})
            navigate("/admin/sentra")
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
                <h1>Tambah Sentra</h1>
                <input type="text" placeholder="nama sentra" onChange={handleChange} name="nama" />
                <button className="formButton" onClick={handleClick}>Tambah</button>
                <button className="back"><Link to="/admin/sentra">Kembali</Link></button>
            </div>
            </div>
        </div>
    )
}

export default Add;