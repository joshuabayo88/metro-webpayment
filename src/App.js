import React, { useState } from "react";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";

function App() {
  // const [user, setUser] = useState({
  //   name: "",
  //   email: "",
  // });

  // function handleChange(event) {
  //   const { name, value } = event.target;

  //   setUser((prevUser) => {
  //     return {
  //       ...prevUser,
  //       [name]: value,
  //     };
  //   });
  // }

  // function makePayments() {
  //   console.log(user.email);
  // }

  const config = {
    public_key: process.env.REACT_APP_FLUTTER_KEY,
    tx_ref: Date.now(),
    amount: 100,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: "user@gmail.com",
      phonenumber: "07064586146",
      name: "joel ugwumadu",
    },
    customizations: {
      title: "my Payment Title",
      description: "Payment for items in cart",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);
  console.log(config.public_key);
  // console.log(user.email);

  return (
    <div>
      <header className="py-2 h-17 bg-gradient-to-tr from-[#d7e1ec] to-[#ffffff] sticky top-0">
        <img
          src="metrologobg.png"
          alt="Metro Logo"
          className="animate-bounce h-12"
        />
      </header>
      <div
        className="min-h-screen flex items-center 
    justify-center flex-col bg-[url('https://cdn.pixabay.com/photo/2017/02/17/08/11/family-2073604_960_720.png')] bg-no-repeat
     bg-center bg-[#8696a7]"
      >
        {/* <h1 className="text-[#2f627a] font-semibold text-3xl animate-bounce">
          Metro Pay
        </h1> */}

        <form className="flex flex-col md:h-20">
          <input
            className=" my-3 rounded-md transition duration-500 shadow-md 
          hover:shadow-gray-500 px-2 w-max outline-none text-gray-500 text-2xl"
            type="text"
            placeholder="Name"
            name="name"
            required
            // value={user.email}
            // onChange={handleChange}
          />
          <input
            className=" my-3 rounded-md transition duration-500 shadow-md 
          hover:shadow-gray-500 px-2 outline-none w-96 text-gray-500 text-2xl"
            type="email"
            placeholder="Email"
            name="email"
            required
            // value={user.email}
            // onChange={handleChange}
          />

          <input
            className=" my-3 rounded-md transition duration-500 shadow-md 
          hover:shadow-gray-500 px-2 outline-none w-72 text-gray-500 text-2xl"
            type="text"
            placeholder="Age"
            name="age"
            required
            // value={user.email}
            // onChange={handleChange}
          />

          <input
            className=" my-3 rounded-md transition duration-500 shadow-md 
          hover:shadow-gray-500 px-2 outline-none w-72 text-gray-500 text-2xl"
            type="text"
            placeholder="Address"
            name="address"
            required
            // value={user.email}
            // onChange={handleChange}
          />

          <button
            className="bg-[#2f627a] rounded-md px-2 text-gray-200 text-xl w-40
             hover:scale-105 transition duration-300"
            type="submit"
            onClick={() => {
              handleFlutterPayment({
                callback: (response) => {
                  console.log(response);
                  closePaymentModal(); // this will close the modal programmatically
                },
                onClose: () => {},
              });
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
