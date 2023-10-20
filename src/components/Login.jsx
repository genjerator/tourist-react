import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import axios from "../api/axios.js"

const login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [errors, setErrors] = useState("")
    const navigate = useNavigate();
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/login', {email, password});
            setEmail("");
            setPassword("");
            navigate("/");
        } catch (error) {
            console.log(error.response.data.errors)
            setErrors(Object.entries(error.response.data.errors))

        }
    }

    return (
        <>
            <div className="container mx-auto mt-8 p-4">
                <div className="max-w-md mx-auto bg-white p-8 border rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Login</h2>
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
                    <form onSubmit={handleLogin} >
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email:</label>
                            <input type="email" id="email" name="email"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   placeholder="email"
                                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                   required/>
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password:</label>
                            <input type="password" id="password" name="password"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   placeholder="password"
                                   className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
                                   required/>
                        </div>
                        <div className="flex items-center justify-between">
                            <button type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login
                            </button>
                            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default login
