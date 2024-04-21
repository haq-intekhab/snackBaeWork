import { useState } from "react";


const PaymentDeatailsForm = () => {

  const [formData, setFormData] = useState({
    UpiId: "",
    UpiNumber: "",
  });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [formData1, setFormData1] = useState({
    bankAccount: "",
    ifscCode: "",
    BenificeiryName: "",
  });

  const handleChange1 = (e) => {
    setFormData1({
      ...formData1,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData1);
    setFormData1({
      bankAccount: "",
      ifscCode: "",
      BenificeiryName: "",
    });

    console.log(formData);
        setFormData({
            UpiId: "",
            UpiNumber: ""
        });
  };

  const [option, setoption] = useState("");
  const [mode, setMode] = useState("");

  const ChangeHandle = (e) => {
    console.log(e.target.value);
    setoption(e.target.value);
  };

  return (
    <div className="flex flex-col flex-grow bg-white">
      <form
      onSubmit={handleSubmit}
      className="bg-white  rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap"
      noValidate>
      <div>
        <label className="inline-flex items-center px-10 mt-6">
          <input
            id="option1"
            type="radio"
            className="form-radio text-blue-500 mb-4"
            name="option"
            onChange={ChangeHandle}
            value="Bank Transfer"
          />

          <span
            className={`${
              mode === "BankTransfer"
                ? "text-Black font-bold"
                : "text-[#64748B] font-bold"
            } ml-2 mb-4`}
            onClick={() => setMode("BankTransfer")}
          >
            Bank Transfer
          </span>
        </label>

        {option === 'Bank Transfer' && (
          <div className="max-w-screen-xl mx-auto">
          <div
            className="bg-white  rounded px-8 pt-6 pb-8 mb-4 flex flex-wrap"
          >
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                Bank Account
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="bankAccount"
                value={formData1.bankAccount}
                type="text"
                placeholder="Enter Bank Account"
                name="bankAccount"
                onChange={handleChange1}
                required
              />
              <p className="md:text-md bankAccount hidden text-xs text-red-600">
                field is required
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                IFSC Code
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ifscCode"
                type="text"
                placeholder="Enter IFSC Code"
                name="ifscCode"
                onChange={handleChange1}
                required
                value={formData1.ifscCode}
              />
              <p className="ifscCode hidden md:text-md text-xs text-red-600">
                field is required
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3 md:mt-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                Benificeiry Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="BenificeiryName"
                type="text"
                value={formData1.BenificeiryName}
                placeholder="Benificeiry Name"
                name="BenificeiryName"
                onChange={handleChange1}
                required
              />
              <p className="BenificeiryName hidden md:text-md text-xs text-red-600">
                field is required
              </p>
            </div>
          </div>
        </div>
        )}

        {/* <div>
            <BankTransferForm/>
        </div> */}

        <p className=" border"></p>

        <label className="inline-flex items-center ml-4 px-6 mt-6">
          <input
            id="option2"
            type="radio"
            className="form-radio text-blue-500 mb-4"
            name="option"
            value="Bhim UPI"
            onChange={ChangeHandle}
          />

          <span
            className={`${
              mode === "BhimUpi"
                ? "text-Black font-bold"
                : "text-[#64748B] font-bold"
            } ml-2 mb-4`}
            onClick={() => setMode("BhimUpi")}
          >
            Bhim UPI
          </span>
        </label>

        {/* <div>
          <BhimUpiForm />
        </div> */}

        {option === 'Bhim UPI' && (
          <div className="max-w-screen-xl mx-auto">
          <div
            className="bg-white  rounded px-8 pt-6 pb-8 mb-2 flex flex-wrap"
          >
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                UPI Id
              </label>

              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="UpiId"
                type="text"
                placeholder="Enter Upi Id"
                name="UpiId"
                onChange={handleChange}
                required
                value={formData.UpiId}
              />
              <p className="UpiId hidden text-xs md:text-md text-red-600">
                field is required
              </p>
            </div>
            <div className="w-full md:w-1/2 mb-4 md:mb-0 md:px-3">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="brandName"
              >
                UPI Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="UpiNumber"
                type="text"
                placeholder="Enter Upi Number"
                name="UpiNumber"
                onChange={handleChange}
                required
                value={formData.UpiNumber}
              />
              <p className="UpiNumber hidden text-xs md:text-md text-red-600">
                field is required
              </p>
            </div>
          </div>
        </div>
        )}
      </div>

      <div className="w-full mt-2 md: ml-6 mb-2 md:px-3">
        <button
          className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Save change
        </button>
      </div>
      </form>
      
    </div>
  );
};

export default PaymentDeatailsForm;
