import React from 'react'
import PaymentDeatailsForm from '../component/PaymentDeatailsForm'
import Header from "../component/Header"
import Footer from "../component/Footer"
import Sidebar from "../component/Sidebar"
import NavButtons from '../component/NavButtons'
import Slidebar from '../component/Slidebar'

const Payment = () => {
  return (
    <div className='flex w-full bg-[#F6F8FF] md:gap-5 gap-0'>
      <div className='md:w-[20%]'><Sidebar /></div>
      <div className='flex flex-col md:w-[80%] w-full'>
      <div className='block md:hidden'><Slidebar/></div>
        <div> <Header /> </div>
        <div> <NavButtons/> </div>
        <div> <PaymentDeatailsForm/> </div>
        <div> <Footer /> </div>
      </div>
    </div>
  )
}

export default Payment