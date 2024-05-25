import { CONTACTS } from '../constants/constants'

const Contact = () => {
  return (
    <div className='border-b border-neutral-800 pb-20'>
      <h1 className='my-10 text-center text-4xl'>
        Get In <span className='text-neutral-500'>Touch</span>
      </h1>
      <div className='text-center tracking-tighter'>
        <p className='my-4'>{CONTACTS.address}</p>
        <p className='my-4'>{CONTACTS.phone}</p>
        <a href={`mailto:${CONTACTS.email}`} className='border-b'>
          {CONTACTS.email}
        </a>
      </div>
    </div>
  )
}

export default Contact
