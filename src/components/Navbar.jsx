import { FaGithub, FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between mb-16 py-6'>
      <div className='flex flex-shrink-0 items-center'>
        <h2 className='text-2xl mx-2 w-10'>EverDev</h2>
      </div>
      <div className='flex items-center justify-center text-[1.5rem] gap-4 mx-8'>
        <FaGithub />
        <FaLinkedin />
        <FaFacebook />
        <FaInstagram />
      </div>
    </nav>
  )
}

export default Navbar
