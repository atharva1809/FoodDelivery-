import React, { useState } from "react";
import { Link,json,useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setcredentials] = useState({

    email: "",
    password: "",

  });
let navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(JSON.stringify({

        email: credentials.email,
        password: credentials.password,

      }))
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({

        email: credentials.email,
        password: credentials.password,

      }),
    }).then(function(response){
        response.json().then(function(data) {
            console.log(data);
            localStorage.setItem("userEmail",credentials.email)
            
            localStorage.setItem("authToken",json.authToken)
            console.log(localStorage.getItem)
            navigate("/")
        });
    }).catch(function(error) {
        console.log('Fetch Error:', error);
    });
    
    
  };
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              name="email"
              onChange={onChange}
              value={credentials.email}
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={onChange}
              value={credentials.password}
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          

          <button type="submit" className=" m-3 btn btn-success">
            Submit
          </button>
          <Link to="/createuser" className="m-3 btn btn-danger">
            SignUp
          </Link>
        </form>
      </div>
    </>
  );
}
