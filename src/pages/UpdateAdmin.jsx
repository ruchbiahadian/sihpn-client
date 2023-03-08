import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const UpdateAdmin = () =>{
    const [sentra, setSentra] = useState({
        username: "",
        password: "",
        oldUsername: "",
        oldPassword: ""
    });

    const [admin, setAdmin] = useState([])

    const navigate = useNavigate()
    
    useEffect(() =>{
        const fetchAllSentra = async ()=>{
            try {
                const res = await axios.get("https://sihpn-server-production.up.railway.app/admin/update", {withCredentials: true})
                setAdmin(res.data[0]);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllSentra()
    }, [])


    const handleChange = (e) =>{
        setSentra((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const handleClick = async (e) =>{
        e.preventDefault() // prevent page refresh
        try {
            if(sentra.oldUsername !== admin.username){
                console.log("admin2", sentra.oldUsername + "+" + admin.username)
                alert("email lama salah");
            }else if(sentra.oldPassword !== admin.password){
                alert("password lama salah");
            }else if(sentra.username.length < 1 || sentra.password < 1 ){
                alert("Masukkan username / password baru!");
            }else{
                await axios.post("https://sihpn-server-production.up.railway.app/admin/update", sentra, {withCredentials: true})
                alert("email dan password baru berhasil diubah");
                navigate("/admin")
            }
            navigate("/admin")
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
                <h1>Update Admin</h1>
                <input type="email" placeholder="email lama" onChange={handleChange} name="oldUsername" />
                <input type="password" placeholder="password lama" onChange={handleChange} name="oldPassword" />
                <input type="email" placeholder="email baru" onChange={handleChange} name="username" />
                <input type="password" placeholder="password baru" onChange={handleChange} name="password" />
                <button className="formButton" onClick={handleClick}>Update</button>
                <button className="back"><Link to="/admin">Kembali</Link></button>
            </div>
            </div>
        </div>
    )
}

export default UpdateAdmin;