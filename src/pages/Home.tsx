import Navbar from "../components/Navbar/Navbar"
import Card from "../components/PagesComponents/home/Card"
import Slider from "../components/PagesComponents/home/Slider"



const Home = () => {

  
  return (
    <div>
       <Navbar/>
       <div className="  pt-16">
         <div className=" flex justify-center text-blue-500 text-5xl font-sans">
          Welcome to Tech-trends-ltd!
         </div>
         <div className="pt-7 flex justify-center gap-4 pl-16">
          <div>
            <Card image="https://img.freepik.com/free-photo/blue-screwdriver-isolated-white-scene_181624-48129.jpg?t=st=1746682785~exp=1746686385~hmac=ec5cbb868c4fcf335b63c8d2728a7ce9f2dc6254de1f29941285e016f58b8446&w=996" name="Screw-driver" description="we sell these"/>
          </div>
          <div className=" p-5">
            <Card image="https://img.freepik.com/free-psd/macbook-mockup_1332-60596.jpg?t=st=1746704649~exp=1746708249~hmac=4b9ea443b1d0aa4f442c5e69bb0ce0ed4667969f7b9e301f15c06d3df23751f7&w=996" name="Laptops" description="we sell these"/>
          </div>
          <div className="p-10
          ">
            <Card image="https://img.freepik.com/free-photo/old-digital-multimeter-isolated-white-background_1232-4395.jpg?t=st=1746704571~exp=1746708171~hmac=d0bcdd829b420c64f0989fb9af5a6128f5579f88415693ea7d11b42c94eb6b45&w=996" name="Tester" description="we sell these"/>
          </div>
         </div>
          <div className=" flex justify-center pt-5">
           <Slider/>
          </div>
          <div className="pt-4"></div>
       </div>

    </div>
  )
}

export default Home