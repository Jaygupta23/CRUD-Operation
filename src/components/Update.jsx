import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Update = () => {
    const [id, setId] = useState(0)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    useEffect(()=>{
        setId(localStorage.getItem("id"))
        setName(localStorage.getItem("name"))
        setEmail(localStorage.getItem("email"))
    },[])
    
    const navigate = useNavigate()

    const handleUpdate = (e)=>{
        e.preventDefault();
        axios.put(`https://65f92049df15145246107efa.mockapi.io/crudApi/create/${id}`,{
            name:name,email:email
    }) .then(()=>{
            navigate('/read');
        })  
    }
  return (
    <div className="container"> 
      <h2 className="mt-5">UPDATE</h2>
      <div className="col-6">
        <form className="my-5 ">
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control mb-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-describedby="emailHelp"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary me-2"
            onClick={handleUpdate}
          >
            Update
          </button>
         <Link to="/read" className="text-decoration-none"> <button className="btn btn-secondary mx-2">Back</button></Link>
        </form>
      </div>
    </div>
  );
};

export default Update;
