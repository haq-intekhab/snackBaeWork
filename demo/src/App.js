import "./App.css";
import { Routes, Route } from "react-router-dom";
import BusinessInfo from "./pages/BusinessInfo";
import PaymentDetails from "./pages/PaymentDetails";


function App() {

  return (
    <div className="w-screen h-full">

      <Routes>
        <Route path="/" element= {<BusinessInfo/>} />
        <Route path="/paymentDetails" element = {<PaymentDetails/>} />
      </Routes>

    </div>
    )
}

export default App;