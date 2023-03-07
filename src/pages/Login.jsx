import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () =>{
    const [data, setData] = useState({
        username: "",
        password: ""
    });


    const navigate = useNavigate()

    const handleChange = (e) =>{
        setData((prev) => ({ ...prev, [e.target.name] :e.target.value }));
    }

    const handleClick = async (e) =>{
        e.preventDefault() // prevent page refresh
        try {
            // const result = await axios.post("http://localhost:8800/login", data)
                const result = await axios.post("http://localhost:8800/login", data, {withCredentials: true});
                if(result.data.length > 0){
                if(result.data[0].password === data.password){
                    navigate("/admin")
                }
            }else{
                alert("Username / Password Salah");
                navigate("/")
            }
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
                <h1>Login</h1>
                <input type="text" placeholder="username" onChange={handleChange} name="username" />
                <input type="password" placeholder="password" onChange={handleChange} name="password" />
                <button className="formButton" onClick={handleClick}>Login</button>
                <button className="back"><Link to="/">Kembali</Link></button>
            </div>
            </div>
        </div>
    )
}

export default Login;