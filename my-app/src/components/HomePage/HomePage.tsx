import React from "react";
import s from "./home.module.css";

interface TypeProps{
  name: string;
}

const HomePage = (props: TypeProps) => {
  return (
    <div>
      <h1 className={s.h1}>Home</h1>
      <p>Hello {props.name}</p>
    </div>
  );
};

export default HomePage;
