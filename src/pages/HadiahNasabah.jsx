import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

const HadiahNasabah = () =>{
    const [sentra, setSentra] = useState({
        pengajuan: "",
        pembelian: "",
        distribusi: "",
        hadiah: ""
    });
    
    const location = useLocation()
    const userId = location.pathname.split("/")[4];
    const [hadiah, setHadiah] = useState([])
    const [itemHadiah, setItemHadiah] = useState([])

    useEffect(() =>{
        const fetchAllSentra = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/admin/nasabah/hadiah/" + userId)
                sentra.pengajuan = res.data[0].pengajuan;
                sentra.pembelian = res.data[0].pembelian;
                sentra.distribusi = res.data[0].distribusi;
                sentra.hadiah = res.data[0].hadiah;
                setHadiah(res.data);
                const nasabahPoin = res.data[0].poin;
                const res2 = await axios.get("http://localhost:8800/admin/daftar-hadiah/" + nasabahPoin)
                setItemHadiah(res2.data)
            } catch (err) {
                console.log(err)
            }
        }
        fetchAllSentra()
    }, [])


    const navigate = useNavigate()

    const handleChange = (e) =>{
        setSentra((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const handleClick = async (e) =>{
        e.preventDefault() // prevent page refresh
        try {
            console.log('sent', sentra);
            await axios.put("http://localhost:8800/admin/nasabah/hadiah/" + userId, sentra)
            window.location.reload()
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
                <h1>Hadiah Nasabah</h1>
                {
                    hadiah.map(nas =>(
                        <div key={userId}>
                            <div className="dataBox">
                                <h4>Kode Unik : {nas.kode_unik}</h4>
                            </div>
                            <div className="inputBox">
                                <select defaultValue={nas.item} name="hadiah" onChange={handleChange}>
                                    <option value={nas.item}>{nas.item}</option>
                                    {
                                        itemHadiah.map(item =>(
                                            <option key={item.id} value={item.hadiah}>{item.hadiah}</option>
                                        ))
                                    }
                                </select>
                            </div>
                            <div className="inputBox">
                                <h4>Pengajuan:</h4>  
                                <select defaultValue={nas.pengajuan} name="pengajuan" onChange={handleChange}>
                                    <option value="0">Diproses</option>
                                    <option value="1">Selesai</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <h4>Pembelian:</h4>  
                                <select defaultValue={nas.pembelian} name="pembelian" onChange={handleChange}>
                                    <option value="0">Diproses</option>
                                    <option value="1">Selesai</option>
                                </select>
                            </div>
                            <div className="inputBox">
                                <h4>Distribusi:</h4>  
                                <select defaultValue={nas.distribusi} name="distribusi" onChange={handleChange}>
                                    <option value="0">Diproses</option>
                                    <option value="1">Selesai</option>
                                </select>
                            </div>
                        </div>
                    ))
                }
                <button className="formButton" onClick={handleClick}>Update</button>
                <button className="back"><Link to="/admin/nasabah">Kembali</Link></button>
            </div>
            </div>
        </div>
    )
}

export default HadiahNasabah;


