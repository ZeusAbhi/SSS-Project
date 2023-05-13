import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Navbar } from "./navbar";
import { marvelImages } from "./marvel";
import Popup from 'reactjs-popup'
import "./view.css"
export const View = () => {

  const [home, setHome] = useState([]);

  useEffect(() => {
    async function getHomeData() {
      let response = await axios.get(
        "http://localhost:1337/api/home-movies?populate=*"
      );
      setHome(response.data.data);
    }
    getHomeData();
  }, []);

  const handleSort = () => {
    setHome(() =>
      [...home].sort((a, b) =>
        a.attributes.Title > b.attributes.Title ? 1 : -1
      )
    );

  };
   const Modal =()=>{
    return <Popup trigger={<button className='Route'  style={{width:"7vw",height:"5vh", background: "white",
    borderRadius: "3px",
    cursor: "pointer"}} > <b>At Home ↓</b></button>} position="bottom center">
        {close=>(
    <div  style={{display:"flex",flexDirection:"column",background:"black",width:"10vw",border:"0px"}}>
      
        <Link id="home" to ="/home" style={{textDecoration:"none",color:"white"}}>At Home</Link>
        <Link id="theatre" to ="/theatre" style={{textDecoration:"none",color:"white"}}>At Theatre</Link>
        
        <a className="close" onClick={close}>
      &times;
    </a>
    </div>
  
        )}
    </Popup>
  }
  return (
    <>
      <div
        className="homecontainer"
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "#f3f3f3",
        }}
      >
        <div className="cont" style={{ width: "74vw", background: "white" }}>
          <Navbar />
          <div
            className="headingandchoose"
            style={{ marginTop: "2vh", display: "flex", gap: "5vw" }}
          >
            <div className="heading" style={{ paddingLeft: "1rem" }}>
              <h4> Movies At Home (May 2023)</h4>
            </div>
            <Modal/>
          </div>
          <button
            onClick={handleSort}
            style={{
              marginTop: "2vh",
              paddingLeft: "0.5rem",
              paddingRight: "0.5rem",
              marginLeft: "1rem",
              border: "0px",
              borderRadius: "10px",
              color: "white",
              background: "rgb(59, 130, 246)",
            }}
            className="sort"
          >
            Sort By Name
          </button>
          <div
            className="homemovies"
            style={{
              width: "inherit",
              display: "flex",
              flexWrap: "wrap",
              marginTop: "4vh",
            }}
          >
            {marvelImages(home, 0, 10)}
          </div>
        </div>
      </div>
    </>
  );
};
