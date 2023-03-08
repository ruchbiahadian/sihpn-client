import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Nasabah = () =>{
    const [nasabah, setNasabah] = useState([])
    const navigate = useNavigate()

    useEffect(() =>{
        const fetchAllSentra = async ()=>{
            try {
                const res = await axios.get("https://sihpn-server-final-production.up.railway.app/admin/daftar-hadiah", {withCredentials: true})
                setNasabah(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllSentra()
    }, [])

    const handleDelete = async (id) =>{
        try {
            await axios.delete("https://sihpn-server-final-production.up.railway.app/admin/daftar-hadiah/"+id, {withCredentials: true})
            alert("Hadiah berhasil dihapus!")
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
            <h1>Daftar Hadiah</h1>
                <div className="roWrapper">
                    <button className="back"><Link to="/admin">Kembali</Link></button>
                    <button className="add"><Link to="/admin/daftar-hadiah/tambah" style={{color:'white'}}>Tambah Hadiah</Link></button>
                </div>
                <div className="books">
                    <table>
                        <thead>
                            <tr>
                                <td>Hadiah</td>
                                <td>Poin</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {nasabah.map(nas =>(
                                <tr key={nas.id}>
                                    <td>{nas.hadiah}</td>
                                    <td>{nas.poin}</td>
                                    <td className="center-tr">
                                            <button className="update"><Link to={`/admin/daftar-hadiah/update/${nas.id}`}>Update</Link></button>
                                            <button className="delete" onClick={()=>handleDelete(nas.id)}>Hapus</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Nasabah;