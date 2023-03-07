import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const AddNasabah = () =>{
    const [sentra, setSentra] = useState({
        id_sentra: "",
        nama: "",
        priode: "",
        sesi: "",
        kode_unik: "temp",
        poin: ""
    });

    const [getSentr, setSentr] = useState([])

    useEffect(() =>{
        const fetchAllSentra = async ()=>{
            try {
                const res = await axios.get("http://localhost:8800/admin/sentra", {withCredentials: true})
                setSentr(res.data);
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
            const resultId = await axios.post("http://localhost:8800/admin/nasabah/tambah", sentra, {withCredentials: true})
            console.log("result_id", resultId.data)
            await axios.get("http://localhost:8800/admin/nasabah/update/kodeunik/" + (resultId.data.insertId + "x" + sentra.priode), {withCredentials: true})
            await axios.get("http://localhost:8800/admin/hadiah/tambah/" + (resultId.data.insertId + "x" + sentra.id_sentra), {withCredentials: true})
            navigate("/admin/nasabah")
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
                <h1>Tambah Nasabah</h1>
                <input type="text" placeholder="nama nasabah" onChange={handleChange} name="nama" />
                <select name="id_sentra" onChange={handleChange}> 
                    <option value="">Sentra</option>
                    {
                        getSentr.map(nas =>(
                            <option key={nas.id} value={nas.id}>{nas.nama}</option>
                        ))
                        
                    }
                </select>
                <input type="text" placeholder="priode / tahun pendampingan" onChange={handleChange} name="priode" />
                <select name="sesi" onChange={handleChange}>
                    <option value="0">Sesi Pendampingan</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                </select>
                <input type="number" placeholder="total poin" onChange={handleChange} name="poin" />
                <button className="formButton" onClick={handleClick}>Tambah</button>
                <button className="back"><Link to="/admin/nasabah">Kembali</Link></button>
            </div>
            </div>
        </div>
    )
}

export default AddNasabah;