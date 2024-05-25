import aboutPicture from '../assets/allester-about.jpg'
import { ABOUT_CONTENT } from '../constants/constants'

const About = () => {
  return (
    <div className='border-b border-neutral-800 pb-4'>
      <h2 className='my-20 text-center text-4xl'>
        About <span className='text-neutral-500'>Me</span>
      </h2>

      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img
              className='w-[25rem] rounded-xl filter brightness-90'
              src={aboutPicture}
              alt='About Image'
            />
          </div>
        </div>

        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6 leading-relaxed'>
              {ABOUT_CONTENT}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
