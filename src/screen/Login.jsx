import { useEffect, useState } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom"
import Success from "./Success";
import Error from "./Error";

function Login(){

    const login = () => {
        localStorage.setItem('login', true)
        navigate("/");
    }

    const navigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("login");
        if (login) {
          navigate("/");
        }
    });

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [allEntry, setAllEntry] = useState([])

    const submitForm = (e) => {
        e.preventDefault()
        const newEntry = { email: email, password: password }
        setAllEntry([...allEntry, newEntry])
    }

    useEffect(() => {
        localStorage.setItem("emailData", email)
    })

    useEffect(() => {
        localStorage.setItem("passwordData", password)
    })

    const [error, setError] = useState(false)

    const [success, setSuccess] = useState(false)

    const Successtimer = () => {
        setTimeout(() => {
            setSuccess(true)
            navigate("/products")
        }, 1000)
    }

    const Errortimer = () => {
        setTimeout(() => {
            setError(false)
        }, 2000)
    }

    const LoginCart = () => {
        if (email.length >= 2 && password.length >= 2) {
            console.log("success")
            setSuccess(true)
            Successtimer()
        } else {
            console.log("error")
            setError(true)
            Errortimer()
        }
    }

    return (
        <div>
            <div className="h-20">
            <div className="flex justify-center items-center">{error && <Error />}</div>
            <div className="flex justify-center items-center">{success && <Success />}</div>
            </div>
            <form className='loginscreen' onSubmit={submitForm}>
                <div className='main'>
                    <div className='emaildiv'>
                        <p className='emailp'>Email</p>
                        <input className='emailinputp' type='email' name="email" id="email" placeholder='Email' autoComplete="off" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className='passdiv'>
                        <p className='passwordp'>Password</p>
                        <input className='passinputp' type='text' name="password" id="password" placeholder='Password' autoComplete="off" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className='btnlogin'>
                        {/* <button className='loginbtn' type="submit" onClick={LoginCart}>Login</button> */}
                        <button className='loginbtn' type="submit" onClick={login}>Login</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Login

