import { Link } from "react-router-dom"
import axios from "axios";
import { useState } from "react";


export default function LoginPage(){
    const [email,setEmail] = useState('');
    const [password,setPassword] =useState('')

    async function handleLoginSubmit(ev){
        ev.preventDefault();
        try{
        await axios.post('/login',{email,password});
        alert('Login Successful');
    } catch(e){
        alert('Login Failed');
    }
    }
    return(
        <div className=" my-4 grow flex items-center justify-around">
            <div className="mb-55">
        
            <h1 className="text-3xl text-center mb-4">Login Now</h1>
           <form className="max-w-md mx-auto  " onSubmit={handleLoginSubmit}>
            <input  type="email" placeholder="{'your@email.com'}" 
            value={email} 
            onChange={ev=> setEmail(ev.target.value)} />
            <input type="password" placeholder="password" 
            value={password}
             onChange={ev =>setPassword(ev.target.value)} />
            <button className="primary">Login</button>
           
            <div>Dont have an account yet?<Link to={'/register'}  className="underline text-black"> Register now </Link></div>
            
            
           </form>
           </div>
        </div>
    )
}