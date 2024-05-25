import { FaHtml5, FaCss3Alt } from 'react-icons/fa'
import { SiTailwindcss, SiMongodb, SiExpress, SiReact } from 'react-icons/si'
import { DiPhp, DiLaravel, DiMysql } from 'react-icons/di'
import { RiNodejsLine } from 'react-icons/ri'
import { motion } from 'framer-motion'

const Technologies = () => {
  const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
      y: [10, -10],
      transition: {
        duration: duration,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'reverse',
      },
    },
  })

  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className='my-20 text-center text-4xl'
      >
        Tech <span className='text-neutral-500'>Stack</span>
      </motion.h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className='flex flex-wrap items-center justify-center gap-4'
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaHtml5 className='text-[3rem] text-red-500' title='HTML' />
        </motion.div>
        <motion.div
          variants={iconVariants(3.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <FaCss3Alt className='text-[3rem] text-blue-500' title='CSS' />
        </motion.div>
        <motion.div
          variants={iconVariants(4.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiTailwindcss
            className='text-[3rem] text-cyan-500'
            title='Tailwind CSS'
          />
        </motion.div>
        <motion.div
          variants={iconVariants(5.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiMongodb className='text-[3rem] text-green-500' title='MongoDB' />
        </motion.div>
        <motion.div
          variants={iconVariants(6.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiExpress className='text-[3rem] text-white' title='Express JS' />
        </motion.div>
        <motion.div
          variants={iconVariants(7.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <SiReact className='text-[3rem] text-blue-400' title='React JS' />
        </motion.div>
        <motion.div
          variants={iconVariants(8.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <RiNodejsLine
            className='text-[3rem] text-green-600'
            title='Node JS'
          />
        </motion.div>
        <motion.div
          variants={iconVariants(9.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiPhp className='text-[3rem] text-indigo-600' title='PHP' />
        </motion.div>
        <motion.div
          variants={iconVariants(10.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiLaravel className='text-[3rem] text-red-600' title='Laravel' />
        </motion.div>
        <motion.div
          variants={iconVariants(11.5)}
          initial='initial'
          animate='animate'
          className='rounded-2xl border-4 border-neutral-800 p-4'
        >
          <DiMysql className='text-[3rem] text-yellow-500' title='MySQL' />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
