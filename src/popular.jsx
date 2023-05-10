import React, { useState,useEffect } from 'react'
import "./popular.css"
import axios from 'axios';
export const Popular = () => {
      
     const [popular,setPopular]=useState([]);
     const[tv,setTV]=useState([]);
    useEffect(()=>{

        async function getMovieData(){
            let response=await axios.get("http://localhost:1337/api/popular-movies?populate=*");
            setPopular(response.data.data);
        }
        getMovieData();
        async function getTVData(){
            let response=await axios.get("http://localhost:1337/api/popular-tvs?populate=*");
            setTV(response.data.data);
        }
        getTVData();
       
    },[])
    
    const popularData=(arr)=>{
          return arr.map((e)=>{
            return (
                  <>
                   <div className="nameanddetail" style={{display:"flex",width:"37vw",gap:"6vw" ,marginTop:"2vh"}}>
                    <div className="name" style={{width:"24vw"}}><span>{e.attributes.Name}</span></div>
                    <div className="detail" style={{display:"flex",alignItems:"center" ,gap:"0.5vw"}}>
                    <img style={{width:"2vw"}} src={`http://localhost:1337${e.attributes.logo.data.attributes.url}`} alt="" />
                     <span> <b>{e.attributes.Percentage}%</b></span>
                    </div>
                   </div>
                  </>
            )
          })
    }
  return (
    <>
      <div className="popularbox" style={{width:"74vw",marginTop:"4vh"}}>
         <div className="popularcontainer" style={{display:"flex",width:"74vw" ,gap:"1vw"}}> 
         <div style={{display:"flex",flexDirection:"column"}}>
        <div className="popularheading"><b style={{paddingLeft:"0.5vw"}}>POPULAR STREAMING MOVIES </b></div>
         <div className="popularmovies" style={{width:"inherit",marginTop:"2vh"}}>
           {popularData(popular)}
         </div>
         </div>
         <div style={{display:"flex",flexDirection:"column"}}>
         <div className="popularheading"><b style={{paddingLeft:"0.5vw"}}>POPULAR TV SHOWS </b></div>
         <div className="populartvs" style={{width:"inherit",marginTop:"2vh"}}>
           {popularData(tv)}
         </div>
         </div>
         </div>
      </div>
    </>
  )
}
