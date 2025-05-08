import Navbar from "../components/Navbar/Navbar"
import Map from "../components/PagesComponents/about/Map"

const About = () => {
  return (
    <div>
        <Navbar/>
        <div className="p-16">
            <div>
                <span className=" font-medium text-3xl text-blue-600 ">About us: </span>
                <p className="pt-4 font-mono text-blue-400">Tech Trends is a forward-thinking technology company 
                    specializing in the development, distribution, and innovation of modern tech products.
                     With a mission to make cutting-edge technology more accessible and impactful, Tech Trends delivers high-quality 
                    solutions ranging from consumer electronics to smart devices, software applications, and IT services.
                </p>
                
            </div>
            <div className=" pt-5">
            <span className=" font-medium text-3xl text-blue-600">Location:</span>
            <Map/>

            </div>
        </div>
    </div>
  )
}

export default About