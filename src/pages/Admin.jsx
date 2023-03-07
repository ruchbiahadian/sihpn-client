import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const Admin = () =>{
    return (
        <div className="container">
            <div className="circleDec"></div>
            <div className="circleDec2"></div>
            <div className="glass">
                <p className="login_link">
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