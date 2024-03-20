import React, { useState } from "react";
import axios from "axios"
import { Link, useNavigate } from "react-router-dom";

const Create = () => {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  const header = {"Access-Control-Allow-Origin": "*"}
  const history = useNavigate()

  const handleSubmit = (e) =>{
    e.preventDefault();
   
    console.log("clciked");
    if(!name && !email) {
      alert("plzz fill those enteries")
    }
    else{
      axios.post("https://65f92049df15145246107efa.mockapi.io/crudApi/create",{
      name:name,
      email:email,
      header
    })
    .then(() =>{
      history("/read")
    })
    }
  }
  return (
    <div className="container">
      <div className="row">
          <div className="d-flex justify-content-between mt-5">
          <h2 className="">CREATE</h2>
          <Link to="/read">
          <button className="btn btn-primary">Read Data</button>
          </Link>
          </div>
        <div className="col-6">
          <form className="my-5 ">
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Username
              </label>
              <input type="text" className="form-control" onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                onChange={(e) => setEmail(e.target.value)}
                aria-describedby="emailHelp"
              />
              
            </div>

            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Create;
