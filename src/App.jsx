import { Marvel } from "./Components/marvel";
import { Navbar } from "./Components/navbar";
import { Popular } from "./Components/popular";
import { Trending } from "./Components/trending";
import SwiperCore, { Autoplay, Navigation } from 'swiper';
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
