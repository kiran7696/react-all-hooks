import axios from "axios";
import React, { useEffect, useState } from "react";

const withFetchApi = (OriginalComponent) => {
  const NewComponenttoReturn = () => {
    const [userData, setUserData] = useState([]);
    const getData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        setUserData(res.data);
        console.log(res.data,'withComponent');
        
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getData();
    }, []);
    return <OriginalComponent userData={userData}/>;
  };
  return NewComponenttoReturn;
};

export default withFetchApi;
