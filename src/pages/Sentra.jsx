import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Sentra = () =>{
    const [sentra, setSentra] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        const fetchAllSentra = async ()=>{
            try {
                const res = await axios.get("https://sihpn-server-final-production.up.railway.app/admin/sentra", {withCredentials: true})
                setSentra(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllSentra()
    }, [])

    const handleDelete = async (id) =>{
        try {
            await axios.delete("https://sihpn-server-final-production.up.railway.app/admin/sentra/"+id, {withCredentials: true})
            await axios.delete("https://sihpn-server-final-production.up.railway.app/admin/nasabah/sentra/"+id, {withCredentials: true})
            await axios.delete("https://sihpn-server-final-production.up.railway.app/admin/hadiah/sentra/"+id, {withCredentials: true})
            alert("Sentra dihapus!")
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
            <h1>Daftar Sentra</h1>
                <div className="roWrapper">
                    <button className="back"><Link to="/admin">Kembali</Link></button>
                    <button className="add"><Link to="/admin/sentra/tambah" style={{color:'white'}}>Tambah Sentra</Link></button>
                </div>
                <div className="books">
                    {sentra.map(sent =>(
                        <div className="book" key={sent.id}>
                            <h4>{sent.nama}</h4>
                            <button className="update"><Link to={`/admin/sentra/update/${sent.id}`}>Update</Link></button>
                            <button className="delete" onClick={()=>handleDelete(sent.id)}>Hapus</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sentra;