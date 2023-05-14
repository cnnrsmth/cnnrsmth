import React from "react";
// import "./customSubstack.css";

function Substack() {
  return (
    <iframe
      src="https://cnnrsmth.substack.com/embed"
      width="400"
      height="75"
      frameBorder="0"
      scrolling="no"
      style={{
        border: "1px solid #EEE",
        borderRadius: "60px",
        backgroundColor: "#D3D3D3",
        maxWidth: "100%",
        margin: "0",
        padding: "0",
      }}
    />
  );
}

export default Substack;
