import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiReact } from 'react-icons/si'
import { DiPhp, DiLaravel, DiMysql } from 'react-icons/di'
import { RiNodejsLine } from 'react-icons/ri'

const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <h2 className='my-20 text-center text-4xl'>
        Tech <span className='text-neutral-500'>Stack</span>
      </h2>

      <div className='flex flex-wrap items-center justify-center gap-4'>
        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaHtml5 className='text-[3rem] text-red-500' title='HTML' />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaCss3Alt className='text-[3rem] text-blue-500' title='CSS' />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiTailwindcss
            className='text-[3rem] text-cyan-500'
            title='Tailwind CSS'
          />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiMongodb className='text-[3rem] text-green-500' title='MongoDB' />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiExpress className='text-[3rem] text-white' title='Express JS' />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <SiReact className='text-[3rem] text-blue-400' title='React JS' />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <RiNodejsLine
            className='text-[3rem] text-green-600'
            title='Node JS'
          />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiPhp className='text-[3rem] text-indigo-600' title='PHP' />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiLaravel className='text-[3rem] text-red-600' title='Laravel' />
        </div>

        <div className='rounded-2xl border-4 border-neutral-800 p-4'>
          <DiMysql className='text-[3rem] text-yellow-500' title='MySQL' />
        </div>
      </div>
    </div>
  )
}

export default Technologies
