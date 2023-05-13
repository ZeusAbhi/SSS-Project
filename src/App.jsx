import { Marvel } from "./marvel";
import { Navbar } from "./navbar";
import { Popular } from "./popular";
import { Trending } from "./trending";
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import { View } from "./view";
function App() {
  
  SwiperCore.use([Autoplay,Navigation])
  return (
    
    <div className="parentcontainer" style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",marginTop:"0.5vh",background:"#f3f3f3"}}>
      <div className="container" style={{width:"76vw",paddingLeft:"1vw",background:"white"}}>
      <Navbar />
      <Trending/>
      <Marvel/>
      <Popular/>
      </div>
    </div>
    
  );
}

export default App;
