import useFetch from './useFetch';

const ToDoData = () => {
    // const [userData, setUserData] = useState([]);
    // const getData = async () => {
    //   try {
    //     const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    //     console.log(res.data, "res");
    //     setUserData(res.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };
    // useEffect(() => {
    //   getData();
    // }, []);
    
    const [userData] = useFetch("https://jsonplaceholder.typicode.com/todos");
  
    return (
      <>
        <div>
          <h1>ToDos</h1>
        </div>
        <div>
          {userData?.map((item) => {
            return <h3 key={item?.id}>{item?.title?.slice(0, 10)}</h3>;
          })}
        </div>
      </>
    );
}

export default ToDoData
