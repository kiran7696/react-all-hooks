import axios from "axios";
import React, { useEffect, useState } from "react";
import "./ComponentUseEffect.scss"
const ComponentUseEffect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchUsers();
  }, []);


  useEffect(() => {
    const timer = setInterval(() =>{
        console.log('call')
    },1000);
   return () => {
        clearInterval(timer)
      }    
  },
  []);

  const fetchUsers = async () => {
      try {
          const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setLoading(false)
      setUsers(res.data);
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };
  return (
    <>
    {loading ? <h1 className="text-center mt-5">Loading...</h1> : 
    <div className="col-md-12 main">
      {users.map((item) => {
        return (
            //  <div className="row main-container">
          <div className="card col-md-3 mt-3" key={item.id}>
            <h5 className="card-header">{item.username}</h5>
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.email}</p>
            </div>
            </div>
            // </div>
        );
      })}
    </div>
    }
    </>
  );
};

export default ComponentUseEffect;
