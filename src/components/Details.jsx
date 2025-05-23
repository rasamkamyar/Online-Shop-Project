import React from "react";

const Details = ({ data }) => {
  const showDetail = () => {
    console.log(data)
  }
  return <div onClick={showDetail}>Details</div>;
};

export default Details;
