import axios from "axios";
import React, { useEffect, useState } from "react";
import {useNavigate, Link} from "react-router-dom";

const Admin = () =>{

    const navigate = useNavigate()

    const handleClick = async () =>{
        try {
                await axios.post("https://sihpn-server-production.up.railway.app/logout", {}, {withCredentials: true})
                alert("Anda berhasil logout!")
                navigate("/")
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="container">
            <div className="circleDec"></div>
            <div className="circleDec2"></div>
            <div className="glass">
                <button className="login_link" onClick={handleClick}>Logout</button>
                <div className="admin">
                    <Link to="/admin/sentra"><button>Sentra</button></Link>
                    <Link to="/admin/nasabah"><button>Nasabah</button></Link>
                    <Link to="/admin/daftar-hadiah"><button>Hadiah</button></Link>
                    <Link to="/admin/update"><button>Admin</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Admin;