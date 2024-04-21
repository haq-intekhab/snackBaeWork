import React from 'react'
import { useState } from 'react';

import { RxDashboard } from "react-icons/rx";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";

const Sidebar = () => {

  const [das, setdas] = useState(false);
  const [men, setmen] = useState(false);
  const [pay, setpay] = useState(false);
  const [off, setoff] = useState(false);
  const [cus, setcus] = useState(false);
  const [set, setset] = useState(true);
  const [log, setlog] = useState(false);
  

  const a = () => {
    setdas(true)
    setmen(false)
    setpay(false)
    setoff(false)
    setcus(false)
    setset(false)
    setlog(false)
    
  }
  const b = () => {
    setdas(false)
    setmen(true)
    setpay(false)
    setoff(false)
    setcus(false)
    setset(false)
    setlog(false)
  }
  const c = () => {
    setdas(false)
    setmen(false)
    setpay(true)
    setoff(false)
    setcus(false)
    setset(false)
    setlog(false)
  }
  const d = () => {
    setdas(false)
    setmen(false)
    setpay(false)
    setoff(true)
    setcus(false)
    setset(false)
    setlog(false)
  }
  const e = () => {
    setdas(false)
    setmen(false)
    setpay(false)
    setoff(false)
    setcus(true)
    setset(false)
    setlog(false)
  }
  const f = () => {
    setdas(false)
    setmen(false)
    setpay(false)
    setoff(false)
    setcus(false)
    setset(true)
    setlog(false)
  }
  const g = () => {
    setdas(false)
    setmen(false)
    setpay(false)
    setoff(false)
    setcus(false)
    setset(false)
    setlog(true)
  }
  return (
    <div className='w-full bg-white'>

        <div id='left' className='sm:w-[20%] bg-white sm:fixed absolute sm:left-1 right-2   z-40   h-full hidden sm:block   px-6 text-[.95rem]  gap-32  '>
            <img className='my-3 mx-auto' src='/IMG-20231226-WA0003 2.png' alt=''></img>
            <p className=" border"></p>
            <div>
              <div id=''
                onClick={a}

                className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${das ? ('text-[#004AAD]') : ('text-[#64748B]')} `}
              >
                <RxDashboard className='text-[1.1rem]' /> <p className=''>Dashboard</p>
              </div>
              <div id=''
                onClick={b}

                className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${men ? (' text-[#004AAD]') : ('text-[#64748B]')} `}
              >
                <BiSolidFoodMenu className='text-[1.1rem]' /> <p className=''>Menu</p>
              </div>
              <div id=''
                onClick={c}

                className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${pay ? ('text-[#004AAD]') : ('text-[#64748B]')} `}
              >
                <MdPayment className='text-[1.1rem]' /> <p className=''>Payments</p>
              </div>
              <div id=''
                onClick={d}

                className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${off ? (' text-[#004AAD]') : ('text-[#64748B]')} `}
              >
                <BiSolidOffer className='text-[1.1rem]' /> <p className=''>Offers & Events</p>
              </div>
              <div id=''
                onClick={e}

                className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${cus ? (' text-[#004AAD]') : ('text-[#64748B]')} `}
              >
                <RiCustomerService2Line className='text-[1.1rem]' /><p className=''>Customers</p>
              </div>
            </div>

            <div className='mt-20'>
              <div id=''
                onClick={f}

                className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${set ? (' text-[#004AAD]') : ('text-[#64748B]')} `}
              >
                <MdOutlineSettings className='text-[1.2rem]' /><p className=''>Settings</p>
              </div>
              <div id=''
                onClick={g}
                className={`w-full h-[50px] cursor-pointer mb-1 flex items-center rounded-lg font-semibold p-4 gap-3 ${log ? (' text-[#004AAD]') : ('text-[#64748B]')} `}
              >
                <HiOutlineLogout className='text-[1.2rem]' /><p className=''>Log Out</p>
              </div>
            </div>
       </div>

    </div>
  )
}

export default Sidebar