import { useState } from "react"


const URL = "http://localhost:4000/api/auth/login";

export const Login = ()=>{

    const [user, setUser] = useState({
        email: "",
        password:"",
    });

    const handleInput = (e) => {
         let name  = e.target.name;
         let value = e.target.value;

         setUser({
            ...user,
            [name]:value,
         })
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        console.log(user);

       //ssending data to backend
        try {
            const response = await fetch(URL , {
                method: "POST",
                headers:{
                    'content-type':'application/json',
                },
                body: JSON.stringify(user),
            }) 
            console.log("login form", response);

            if(response.ok){
                alert("login successful!");
                setUser( { username:"",  password:""});
            }else{
                alert("invalid credential")
                console.log("invalid credential");
            }
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <div className="registration-form">
        <h2>Login Here</h2>

        <form onSubmit={handleSubmit}>

           <div>
            <label htmlFor="email">Email:</label>
            <input type="email"  name="email" placeholder="email" id="email" required autoComplete="off"  value={user.email} onChange={handleInput} />
            </div>
            <br />
            <div>
            <label htmlFor="password">Password:</label>
            <input type="password"  name="password" placeholder="password" id="password" required autoComplete="off" 
            value={user.password} onChange={handleInput}
            />
            </div>
           
            <br /><br />
            <button type="submit" className="btn btn-submit">
                Login 
            </button>
        </form>
      </div>
    )
}