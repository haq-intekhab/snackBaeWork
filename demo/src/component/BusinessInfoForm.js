import React from 'react'
import { useState } from 'react'
import Select from "react-dropdown-select"

const BusinessInfoForm = () => {

    const [btnType,setBtnType] = useState("change");
    const [formData, setFormData] = useState({
        brandName: "",
        emailAddress: "",
        contactNumber: "",
        ContactPerson: "",
        outletAddress: "",
        businessType: "",
        cuisinesServed: [],
        Instagram: "",
    
    })

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            brandName: "",
            emailAddress: "",
            contactNumber: "",
            ContactPerson: "",
            outletAddress: "",
            businessType: "",
            cuisinesServed: [],
            Instagram: "",
        });
      }
    
      const options=[
        {id:"India",name:1},
        {id:"Pakishtan",name:2},
        {id:"Maldeep",name:3},
        {id:"Chaina",name:4}
      ]
    //   const [value,setvalue]=useState(null);
    


    return (
        
        <div className="max-w-screen-xl bg-white  mx-auto">

            <p className=' border'></p>
            <div>
                <p className='px-8 py-4 font-sans font-semibold text-lg'>Brand Logo</p>
                <div className='flex px-9 md:gap-8 gap-4'>
                    <img alt='logo' className='w-20 h-16 rounded-lg' src='https://scontent.fccu4-3.fna.fbcdn.net/v/t39.30808-1/333223448_922023752164322_7671878336685189137_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YyUhToABA7sAb5eHg2B&_nc_ht=scontent.fccu4-3.fna&oh=00_AfD98WNbt4hF3CqH__XS-x7b-WAckwUa7-W0c24hNOFKEw&oe=6626FC2D'></img>
                    <button
                        className={`${btnType === "change" 
                        ?
                        "bg-blue-900 text-white"
                        :"bg-transparent text-richblack-200"} py-1 px-4 my-auto rounded-lg  border-black border transition-all duration-200`}
                        onClick={()=> setBtnType("change")}>
                            Change
                    </button>

                    <button
                        className={`${btnType === "delete" 
                        ?
                        "bg-blue-900 text-white"
                        :"bg-transparent text-richblack-200"} py-1 px-4 my-auto border-black border rounded-lg transition-all duration-200`}
                        onClick={() => setBtnType("delete")}>
                            Delete
                        </button>
                </div>
            </div>

        <form noValidate onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap">
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                Brand Name
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="brandName"
                name="brandName"
                type="text"
                value={formData.brandName}
                placeholder="Brand Name"
                onChange={handleChange}
                required
            />
            <p className='brandName hidden text-xs md:text-md text-red-600'>field is required</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
                Email Address
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="emailAddress"
                name="emailAddress"
                type="email"
                value={formData.emailAddress}
                placeholder="Email Address"
                onChange={handleChange}
                required
            />
            <p className='emailAddress hidden text-xs md:text-md text-red-600'>field is required</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                Contact Number
            </label>
            <input
                className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contactNumber"
                name="contactNumber"
                type="tel"
                value={formData.contactNumber}
                placeholder="Contact Number"
                onChange={handleChange}
                required

            />
            <p className='contactNumber hidden text-xs md:text-md text-red-600'>field is required</p>
            </div>
            {/* second line */}

            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 md:mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                Contact Person
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ContactPerson"
                name="ContactPerson"
                type="text"
                value={formData.ContactPerson}

                placeholder="Name"
                onChange={handleChange}
                required
            />
            <p className='ContactPerson hidden text-xs md:text-md text-red-600'>field is required</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 md:mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="emailAddress">
                Outlet Address
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="outletAddress"
                name="outletAddress"
                type="text"
                placeholder="Address"
                value={formData.outletAddress}
                onChange={handleChange}
                required
            />
            <p className='outletAddress hidden text-xs md:text-md text-red-600'>field is required</p>
            </div>
            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 md:mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="contactNumber">
                Business Type
            </label>
            <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="businessType"
                name="businessType"
                value={formData.businessType}
                onChange={handleChange}
                required

            >
                <option disabled value=''>Select Business Type</option>
                <option value="Retail">Restaurant</option>
                <option value="Services">Services</option>
                <option value="Manufacturing">Manufacturing</option>
            </select>
            <p className='businessType hidden text-xs md:text-md text-red-600'>field is required</p>
            </div>




            {/* third line */}

            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 lg:mt-4 md:mt-8">
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contactNumber"
            >
                cuisines Served
            </label>
            <Select
                name="cuisinesServed"
                options={options}
                labelField="id"
                valueField="id"
                multi
                onChange={(selectedOptions) =>
                setFormData({
                    ...formData,
                    cuisinesServed: selectedOptions.map((option) => option.id),
                })
                }
                color="#72bcd4"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-900 leading-tight focus:outline-none focus:shadow-outline"
            />
            <p className="cuisinesServed hidden text-xs md:text-md text-red-600">
                field is required
            </p>
            </div>





            <div className="w-full md:w-1/3 mb-4 md:mb-0 md:px-3 lg:mt-4 md:mt-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="brandName">
                Instagram link (option)
            </label>
            <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Instagram"
                name="Instagram"
                type="text"
                value={formData.Instagram}
                placeholder="Instagram.com/chamchun12"
                onChange={handleChange}
            />
            </div>
        
            <div className="w-full mt-4 md:px-3">
                <button
                    className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    Save changes
                </button>
            </div>
        </form>
        </div>
    )
}

export default BusinessInfoForm