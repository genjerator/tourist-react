import React, {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "../api/axios.js";
const register = ()=> {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [password_confirmation,setPasswordConfirmation] = useState('');
    const [errors,setErrors] = useState([]);
    //const navigate =useNavigate();
    const handleSubmit = (event) =>{
        event.preventDefault();
        console.log('handleSubmit');
        axios.post('/register',{name,email,password,password_confirmation})
            .then(console.log("Sdsd"))
            .catch(error=>{
                console.log(error.response.data.errors);
                setErrors(Object.entries(error.response.data.errors))
            })
    }
    return (<>
        <div className="container mx-auto mt-8 p-4">
            <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Register</h2>
                {
                    errors.length>0 && <div>
                        <div className="font-medium text-red-600">
                            Wrong
                        </div>
                        <ul className="mt-3 mb-4 list-desc list-inside text-sm text-red-600">
                            {
                                errors.map((error,index)=>{
                                    return <li key={index}>{error[1][0]}</li>
                                })
                            }
                        </ul>
                    </div>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                        <input type="email"
                               id="email"
                               name="email"
                               value={email}
                               onChange={(e)=>setEmail(e.target.value)}
                               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                               required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Full Name:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required/>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password_confirm" className="block text-gray-700 font-medium mb-2">Confirm
                            Password:</label>
                        <input
                            type="password"
                            id="password_confirm"
                            name="password_confirm"
                            value={password_confirmation}
                            onChange={(e)=>setPasswordConfirmation(e.target.value)}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                            required/>
                    </div>
                    <div className="flex items-center justify-between">
                        <button type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </>)
}

export default register
