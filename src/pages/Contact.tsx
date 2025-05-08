import Navbar from "../components/Navbar/Navbar"
import { FaGithub, FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6';

const Contact = () => {
  
  return (
    <div>
        <Navbar/>
        <div className="p-16">
        <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">Contact Me</h1>

      <form  className="w-full max-w-md bg-white p-6 rounded shadow">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="w-full mb-4 p-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full mb-4 p-3 border rounded h-32"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>

      <div className="flex space-x-6 mt-8 text-2xl text-gray-700">
        <a href="https://wa.me/your_number" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="https://github.com/your_username" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your_username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="https://x.com/your_username" target="_blank" rel="noopener noreferrer">
          <FaXTwitter />
        </a>
      </div>
    </div>
        </div>
    </div>
  )
}

export default Contact




 
