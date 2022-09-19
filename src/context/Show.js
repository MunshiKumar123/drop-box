import React from "react";
import { Mycontext } from "./Demo";
import { useContext } from "react";
const Show = () => {
  const records = useContext(Mycontext);
  const { data, more, api } = records;
  return (
    <>
      <div className="container">
        <h3>Show Component</h3>
        Roll: {data.roll}
        <br />
        Name: {data.name}
        <br />
        id: {more.id}
        <br />
        role: {more.role}
        <br />
        {api.map((row, i) => {
          return <div key={i}>{row.userId}</div>;
        })}
      </div>
    </>
  );
};
export default Show;
