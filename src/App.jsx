import {useEffect, useState} from "react";
import Round from "./components/Round";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import {Link, Routes, Route, useNavigate} from "react-router-dom";
import axios from "./api/axios.js";

function App() {
    const navigate = useNavigate();
    const handleLogout = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/logout');
            navigate("/login");
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(()=>{
        axios.get('/user')
            .then(()=>{
            })
            .catch(error=>{
                if(error.response.status===401){
                    // navigate('/login');
                    console.log(error)
                }
            })
    },[])

    return (
        <>
            <nav className="bg-blue-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <Link to="/" className="text-white hover:text-gray-300 mr-4">Home</Link>
                        <Link to="/About" className="text-white hover:text-gray-300 mr-4">About</Link>
                    </div>
                    <div>
                        <Link to="/login" className="text-white hover:text-gray-300 mr-4">Login</Link>
                        <Link to="/register" className="text-white hover:text-gray-300 mr-4">Register</Link>
                        <button type="button" onClick={handleLogout} className="text-white hover:text-gray-300 mr-4">Logout</button>
                        <p>asasas{import.meta.env.TEST}</p>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="/" element={<Round/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>

        </>
    );
}

export default App;
