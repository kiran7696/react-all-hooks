import React from "react";
import withFetchApi from "./withFetchApi";

const ToDoData = ({ userData }) => {
    console.log(userData,'userdatainToDos');
    
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
};

export default withFetchApi(ToDoData);
