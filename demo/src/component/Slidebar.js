import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { RxDashboard } from "react-icons/rx";
import { BiSolidFoodMenu } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { BiSolidOffer } from "react-icons/bi";
import { RiCustomerService2Line } from "react-icons/ri";
import { MdOutlineSettings } from "react-icons/md";
import { HiOutlineLogout } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";

const Slidebar = () => {

  const [show,setshow]=useState(false);

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

const BarCall=()=>{
  setshow(!show)
    
}

  return (
    <>
    <div className='w-full fixed ' >
        <div className='pl-8 p-4  bg-white'>{
          show?<RxCross2 size={36} onClick={BarCall} />:<TiThMenu size={36} onClick={BarCall}/>
        }
        </div>

      { show &&
      <div className='pl-6 py-5 bg-slate-200'>

      <div className=' w-full z-40 shadow-gray-200 border-r-2 h-full'>
          <div>
            <div id=''
              onClick={a}

              className={`w-full h-[50px] cursor-pointer  mb-1 flex items-center rounded-lg font-semibold p-4  gap-3 ${das ? ('text-[#004AAD]') : ('text-[#64748B]')} `}
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

          <div className='mt-2'>
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
      }
      {/* </div> */}


    </div>
    </>
  )
}

export default Slidebar