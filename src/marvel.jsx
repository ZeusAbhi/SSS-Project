import React, { useEffect, useState } from 'react'
import "./marvel.css"
import axios from 'axios';
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { useAutoAnimate } from '@formkit/auto-animate/react'
// Import Swiper React components
import {  Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import SwiperCore, { Navigation } from 'swiper';
import ReactPlayer from 'react-player';
SwiperCore.use([Navigation]);

export const Marvel = () => {
     const [marvel,setMarvel]=useState([]);
     const [animationParent] = useAutoAnimate()

    useEffect(()=>{

        async function getMarvelData(){
            let response=await axios.get("http://localhost:1337/api/upcoming-movies?populate=*");
            setMarvel(response.data.data);
        }
        getMarvelData();
       
    },[])
    
     
      const Modal =({link})=>{
        return <Popup trigger={<button className='trigger'  style={{position:"absolute",    background: "transparent",
        border: "0px",
        cursor: "pointer"}}><PlayCircleOutlineIcon fontSize='large' /></button>} position="top center">
            {close=>(
        <div  className='tri'>
            <ReactPlayer url={link} width={300} />
            <a className="close" onClick={close}>
          &times;
        </a>
        </div>
      
            )}
        </Popup>
      }
    const marvelImages =(arr,x,y)=>{
      return arr.slice(x,y).map((e)=>{
        return(
            <> 
             
              <div  key={e} style={{width:"15vw",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"relative"}}>
                
            <img className='tile'  src={`http://localhost:1337${e.attributes.image.data.attributes.url}`} alt="" />
                
                <Modal link={e.attributes.VideoLink}/> 
      
                
              <div className="title" style={{textAlign:"center",marginTop:"2vh" ,fontSize:"0.8rem"}}><b>{e.attributes.Title}</b></div>
              </div>
              
            </>
        )
      })
    }

  return (
    <>
    <div className='marvelbox'>
      <div className="marvelheading"><b style={{paddingLeft:"0.5vw"}}>MARVEL MOVIES</b></div>
       <div className="marvelslider" style={{width:"inherit",marginTop:"2vh"}}>
          <Swiper navigation={true} modules={[Navigation]} loop={true} speed={800} className='myswiper' >
            <SwiperSlide> 
                <div style={{display:"flex" ,gap:"1vw",width:"inherit"}}>
              {marvelImages(marvel,0,5)}
              </div>
            </SwiperSlide>
            <SwiperSlide> 
                <div style={{display:"flex" ,gap:"1vw",width:"inherit"}}>
              {marvelImages(marvel,5,10)}
              </div>
            </SwiperSlide>
          </Swiper>
       </div>
    </div>
    </>
  )
}
