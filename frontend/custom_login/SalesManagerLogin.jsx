import { useState } from "react";
import {useNavigate}  from "react-router-dom";
import "./SalesManagerLogin.css"

const SalesManagerLogin = () => {

   const [user, setUser] = useState({
    username:"",
    password:"",
    email:"",
    role:"",
   });

   const navigate = useNavigate();

//    handling the input value
  const handleInput = (e) =>{
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
        ...user,
        [name]: value,
    })
  }

  //handling the form submission
  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log(user);

    //connection to backend

    try {
    const response = await fetch(`http://localhost:4000/api/auth/register`,{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
      },
      body: JSON.stringify(user),
    });

    if(response.ok){
      setUser( { username:"",  password:"",  email:"",role:""});
      navigate("/sales-manager-dashboard");
    }

    console.log(response);

  } catch (error) {
      console.log("registion error", error);
  }

   
  }

    return (
      <div className="registration-form">
        <h2>Login as Labour</h2>

        <form onSubmit={handleSubmit}>

            <div  className="form-group">
            <label htmlFor="username">Username:</label>
            <input type="text"  name="username" placeholder="username" id="username" 
            value={user.username} 
             onChange={handleInput}
            required
             autoComplete="off" />
            </div>

            <div   className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password"  name="password" placeholder="password" id="password" required autoComplete="off" 
            value={user.password} onChange={handleInput}
            />
            </div>

            <div  className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email"  name="email" placeholder="email" id="email" required autoComplete="off"  value={user.email} onChange={handleInput} />
            </div>

            {/* <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input type="number"  name="phone" placeholder="phone" id="phone" required autoComplete="off" 
            value={user.phone} onChange={handleInput} /> 
            </div>

            {/* <div>
            <label htmlFor="role">Role:</label>
            <input type="text"  name="role" placeholder="role" id="role" required autoComplete="off" 
            value={user.role} onChange={handleInput} />
            </div> */}
          
          <div className="form-group">
           <label htmlFor="role">Role:</label>
          <select
            name="role"
            id="role"
            value={user.role}
            onChange={handleInput}
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="SalesManager">Sales Manager</option>
            <option value="Labour">Labour</option>
            <option value="HR">HR</option>
          </select>

          </div>

            <br /><br />
            <button type="submit" className="btn btn-submit">
                Login
            </button>
        </form>
      </div>
        
      
    )
}


export default  SalesManagerLogin;