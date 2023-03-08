import axios from "axios";
import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Home = () =>{

    useEffect(() => {
        document.title = "Hadiah Pendampingan";
    }, [])

     const [home, setHome] = useState({
        kode_unik: ""
    });

    const handleChange = (e) =>{
        setHome((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const statusConverter = (value) => value === 0? "Diproses" : "Selesai";

    const handleClick = async (e) =>{
        e.preventDefault() // prevent page refresh
        try {
            const res = await axios.get("https://sihpn-server-final-production.up.railway.app/" + home.kode_unik, {withCredentials: true})
            const hasil = res.data[0];
            hasil.pengajuan = statusConverter(hasil.pengajuan);
            hasil.pembelian = statusConverter(hasil.pembelian);
            hasil.distribusi = statusConverter(hasil.distribusi);
            alert(
                ` Nama: ${hasil.nama} \n Kode Unik: ${hasil.kode_unik} \n Priode Pendampingan: ${hasil.priode} \n Pengajuan: ${hasil.pengajuan} \n Pembelian: ${hasil.pembelian} \n Distribusi: ${hasil.distribusi} \n Poin: ${hasil.poin} \n Hadiah: ${hasil.item}`
            )
            window.location.reload()
        } catch (err) {
            alert("Kode unik salah!");
            console.log(err);
            window.location.reload();
        }
    }

    return(
        <div className="container">
            <div className="circleDec"></div>
            <div className="circleDec2"></div>
            <div className="glass">
                <button className="login_link"><Link to={`/login`}>Login</Link></button>
                <h2>
                    INFORMASI HADIAH PENDAMPINGAN <br/>
                    PROGRAM SAHABAT DAYA UNIVERSITAS
                </h2>
                <div className="mainForm">
                    <form>
                        <input type="text" placeholder="Kode Unik" name="kode_unik" onChange={handleChange} required/>
                        <button onClick={handleClick}>Cari</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;