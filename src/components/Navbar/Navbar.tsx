import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <nav className="flex justify-between items-center text-blue-800 text-base p-6">
        <div className=" text-3xl font-bold">
          <Link to = "/">
          <span className="bg-blue-700 rounded-2xl p-2 text-white">Tech-</span>Trends-ltd
          </Link>
            
        </div>
        <div className=" space-x-6 font-mono font-semibold text-xl">
          <Link to = "/"> Home</Link>
          <Link to = "/about">About</Link>
          <Link to = "/contact">Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar