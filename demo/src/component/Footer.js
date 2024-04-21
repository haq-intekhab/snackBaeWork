import React from 'react'

const Footer = () => {
  return (
    <div className='md:flex flex-none bg-blue-50 border-2 rounded p-4'>
        <div><img alt='reslogo' className='md:w-40 lg:w-20 w-20 h-16 mx-4 md:mx-0 my-4 md:my-0  md:h-20' src='/Restaurant-Logo-PNG.png'/></div>
        <div className='my-auto md:pl-6 pl-2'>https
            <p>Help Us to make Snackbae better! Share your feedbacks and request features that fits best for your Business</p>
            <button className='text-blue-700 hover:underline'>Give Feedback</button>
        </div>
    </div>
  )
}

export default Footer