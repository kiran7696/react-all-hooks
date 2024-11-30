import useFetch from "./useFetch";

const PostData = () => {
//   const [userData, setUserData] = useState([]);
//   const getData = async () => {
//     try {
//       const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
//       setUserData(res.data);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   useEffect(() => {
//     getData();
//   }, []);
    const [userData] = useFetch("https://jsonplaceholder.typicode.com/posts");

  return (
    <>
      <div>
        <h1>PostData</h1>
      </div>
      <div>
        {userData?.map((item) => {
          return <h3 key={item?.id}>{item?.title?.slice(0, 10)}</h3>;
        })}
      </div>
    </>
  );
};

export default PostData;
