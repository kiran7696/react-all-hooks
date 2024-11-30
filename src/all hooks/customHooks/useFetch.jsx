import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [userData, setUserData] = useState([]);
  const getData = async () => {
    try {
      const res = await axios.get(url);
      setUserData(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return [userData]
};

export default useFetch;
