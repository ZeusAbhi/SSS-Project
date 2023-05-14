import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './trending.css'
 // Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/pagination';
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination,Autoplay } from "swiper";


 
export const Trending = () => {

    const [trend,setTrend]=useState([]);
    useEffect(()=>{
        async function getMovieData(){
           let response= await axios.get("http://localhost:1337/api/trending-movies?populate=*");
           setTrend(response.data.data);
       }
       getMovieData();
    },[])
  
    const imageSlider=(arr)=>{
           return arr.map((e)=>{
            return(
                <> 
                    <SwiperSlide>
                  <div key={e}  style={{width:"40vw",display:"flex",flexDirection:"column",position:"relative"}}>
                    
                    <img src={`http://localhost:1337${e.attributes.image.data.attributes.url}`} alt="" srcset="" />
                     <div className="imagetextbox">
                    <p style={{color:"white",fontWeight:"bold", paddingLeft: "1.2rem",
    paddingRight: "1.2rem"}}>{e.attributes.description}</p>
                    </div>
                  </div>
                  </SwiperSlide>
                </>
            );
           })
    }

  return (
   <>
     <div className="trendslider" style={{width:"74vw"}}>
        <div className="heading" style={{width:"inherit",backgroundColor:"gray",display:"flex",gap:"2vw",alignItems:"center",flexWrap:"wrap"}}>
            <h3 style={{color:"yellow"}}>TRENDING ON RT</h3>
            <h4 style={{color:"white"}}>Guardians Of Galaxy Vol 3.</h4>
            <h4 style={{color:"white"}}>Silo</h4>
            <h4 style={{color:"white"}}>Blackberry</h4>
            <h4 style={{color:"white"}}>Dungeons & Dragons</h4>
        </div> 
         <div className="swiperand3rd" style={{display:"flex"}}>
        <div className="swiper-box" style={{width:"40vw"}}>
     <Swiper navigation={true} pagination={true} modules={[Navigation,Pagination,Autoplay]}     slidesPerView={1} autoplay={{delay:3000,pauseOnMouseEnter :true,disableOnInteraction: false}} speed={800} loop={true} className="mySwiper" >
            {imageSlider(trend)}
       
        </Swiper>
        </div>
        <div className="3rdsection" style={{width:"30vw" ,display:"flex"}}>
            <div className="old" style={{position:"relative"}}>
        <img src="./old.jpg" style={{width:"17vw",height:"-webkit-fill-available"}} alt="" srcset="" />
                     <div className="imagetextbox" style={{width:"17vw",position:"absolute"}}>
                    <p style={{color:"white",fontWeight:"bold", paddingLeft: "1.2rem",
    paddingRight: "1.2rem"}}><b>TV Premiere Dates </b><em>Yes, Chef. Hulu’s</em> </p>
                    </div>
                </div>
                 <div className="spidy" style={{position:"relative"}}>
                    <img src="./spidy.jpg" alt="" srcset=""  style={{width:"17vw",height:"-webkit-fill-available"}}/>
                     <div className="imagetextbox" style={{width:"17vw",position:"absolute"}} >
                    <p style={{color:"white",fontWeight:"bold", paddingLeft: "1.2rem",
    paddingRight: "1.2rem"}}>Spider-Man: Across the Spider-Verse</p>
                    </div>
                    </div>
        </div>
        </div>
     </div>
   </>
  )
}
