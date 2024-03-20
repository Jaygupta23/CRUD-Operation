import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");

  function getData() {
    axios
      .get("https://65f92049df15145246107efa.mockapi.io/crudApi/create")
      .then((res) => {
        setData(res.data);
      });
      
  }

  const handleDelete = (id) => {
    axios
      .delete(
        `https://65f92049df15145246107efa.mockapi.io/crudApi/create/${id}`
      )
      .then(() => {
        getData();
      });
  };

  const setLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
    
  }, []);

  return (
    <div className="container mt-5">
      <div className="form-check form-switch">
        <input className="form-check-input" type="checkbox" role="switch" onChange={()=>{
            if(tableDark === "table-dark") return setTableDark("")
            else setTableDark("table-dark")
        }} />
      </div>
      <div className="d-flex justify-content-between mt-5 mb-3">
        <h2 className="">Read Operation</h2>
        <Link to="/">
          <button className="btn btn-primary">Create Table</button>
        </Link>
      </div>
      <table className={`table ${tableDark}`}>
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody key={eachData.id}>
                <tr>
                  <th scope="row">{eachData.id}</th>
                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>
                    <Link to="/update">
                      <button
                        className="btn btn-success"
                        onClick={() =>
                          setLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email
                          )
                        }
                      >
                        Edit
                      </button>
                    </Link>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default Read;
