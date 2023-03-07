import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Admin = () =>{


    const logout = async ()=>{
        try {
            const res = await axios.get("http://localhost:8800/logout", {withCredentials: true})
            console.log("Anda berhasil logout!")
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <div className="container">
            <div className="circleDec"></div>
            <div className="circleDec2"></div>
            <div className="glass">
                <p className="login_link">
                    {
                        logout()
                    }
                    <Link to={`/`}>Logout</Link>
                </p>
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