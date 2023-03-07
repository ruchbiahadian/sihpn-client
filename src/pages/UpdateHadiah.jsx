import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";

const UpdateHadiah = () =>{
    const [sentra, setSentra] = useState({
        nama: "",
        poin: ""
    });

    const navigate = useNavigate()
    const location = useLocation()
    const hadiahId = location.pathname.split("/")[4];


    const handleChange = (e) =>{
        setSentra((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const handleClick = async (e) =>{
        e.preventDefault() // prevent page refresh
        try {
            await axios.put("http://localhost:8800/admin/daftar-hadiah/update/"+ hadiahId, sentra)
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
                <h1>Update Hadiah</h1>
                <input type="text" placeholder="nama hadiah" onChange={handleChange} name="nama" />
                <input type="number" placeholder="poin" onChange={handleChange} name="poin" />
                <button className="formButton" onClick={handleClick}>Update</button>
                <button className="back"><Link to="/admin/daftar-hadiah">Kembali</Link></button>
            </div>
            </div>
        </div>
    )
}

export default UpdateHadiah;