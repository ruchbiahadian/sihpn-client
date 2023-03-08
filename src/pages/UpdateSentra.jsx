import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const UpdateSentra = () =>{
    const [sentra, setSentra] = useState({
        nama: ""
    });

    const navigate = useNavigate()
    const location = useLocation()

    const sentraId = location.pathname.split("/")[4];

    const handleChange = (e) =>{
        setSentra((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const handleClick = async (e) =>{
        e.preventDefault() // prevent page refresh
        try {
            console.log(sentraId, "+", sentra);
            await axios.put("https://sihpn-server-production.up.railway.app/admin/sentra/update/"+ sentraId, sentra, {withCredentials: true})
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
            <h1>Update Sentra</h1>
            <input type="text" placeholder="nama sentra baru" onChange={handleChange} name="nama" />
            <button className="formButton" onClick={handleClick}>Update</button>
            <button className="back"><Link to="/admin/sentra">Kembali</Link></button>
        </div>
        </div>
        </div>
    )
}

export default UpdateSentra;