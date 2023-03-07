import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";

const Nasabah = () =>{
    const [nasabah, setNasabah] = useState([])
    const [priode, setPriode] = useState([])

    const [cosedPriode, setCosed] = useState({
        priode: ""
    });
    const navigate = useNavigate()

    useEffect(() =>{
        const fetchAllSentra = async ()=>{
            try {
                const resPriode = await axios.get("http://localhost:8800/admin/nasabah/priode", {withCredentials: true})
                setPriode(resPriode.data)
                // const res = await axios.get("http://localhost:8800/admin/nasabah")
                // setNasabah(res.data);
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllSentra()
    }, [])

    const handleDelete = async (id) =>{
        try {
            await axios.delete("http://localhost:8800/admin/nasabah/"+id, {withCredentials: true})
            await axios.delete("http://localhost:8800/admin/hadiah/"+id, {withCredentials: true})
            alert("Nasabah berhasil dihapus!")
            navigate("/admin")
        } catch (err) {
            console.log(err)
        }
    }

    const handleChange = async (e) =>{
        setCosed((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const handleMove = async (e) =>{
        try{
            const res = await axios.get("http://localhost:8800/admin/nasabah/" + cosedPriode.priode, {withCredentials: true})
            setNasabah(res.data);
        }catch (err) {
            console.log(err)
        }
    }



  

    return (
        <div className="container">
            <div className="circleDec"></div>
            <div className="circleDec2"></div>
            <div className="glass">
            <p className="login_link"><Link to={`/`}>Logout</Link></p>
            <h1>Daftar Nasabah</h1>
                <div className="roWrapper">
                    <button className="back"><Link to="/admin">Kembali</Link></button>
                    <button className="add"><Link to="/admin/nasabah/tambah" style={{color:'white'}}>Tambah Nasabah</Link></button>
                </div>
                
                <div className="books">
                    <div className="book filter">
                            <select name="priode" onChange={handleChange}>
                                <option value="">Semua Priode</option>
                                    {
                                        priode.map(item =>(
                                            <option key={item.priode} value={item.priode}>{item.priode}</option>
                                        ))
                                    }
                            </select>
                            <button onClick={handleMove}>
                                Pilih
                            </button>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <td>Nasabah</td>
                                <td>Priode</td>
                                <td>Sesi</td>
                                <td>Action</td>
                            </tr>
                        </thead>
                        <tbody>
                            {nasabah.map(nas =>(
                                <tr key={nas.id}>
                                    <td>{nas.nama}</td>
                                    <td>{nas.priode}</td>
                                    <td>{nas.sesi}</td>
                                    <td className="center-tr">
                                        <button className="update"><Link to={`/admin/nasabah/hadiah/${nas.id}`}>Hadiah</Link></button>
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