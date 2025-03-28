import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     height: "100vh",
    //     width: "100%",
    //   }}
    >
      <RotatingLines width="100px" strokeWidth="3" strokeColor="red" />;
    </div>
  );
};

export default Loader;
