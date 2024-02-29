import React, {  useState } from "react";
import Image from "next/image";
import Header from "@/components/headers/Header";
import Footer from "@/components/footers/page";
import Script from "next/script";
const SingleHotel = ({ hotel }) => {
  const [transformValue, setTransformValue] = useState(0);
  const goNext = () => {
    setTransformValue((prevValue) => {
      const newTransform = prevValue - 398;
      return Math.abs(newTransform) >= window.innerWidth / 1.7
        ? 0
        : newTransform;
    });
  };

  const goPrev = () => {
    setTransformValue((prevValue) => {
      return Math.abs(prevValue) === 0 ? 0 : prevValue + 398;
    });
  };


  const handleBook= async(id)=>{
      try {
        const response = await fetch(`/api/payment/razorpay`,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(id)
        });
        const data = await response.json();
        const options = {
          key: process.env.RAZORPAY_KEY,
          name: "abc",
          currency: data.currency,
          amount: data.amount,
          order_id: data.id,
          description: "Thank You !",
          handler: function (response) {},
          prefill: {
            name: "abc",
            email: "abc@gmail.com",
            contact: 987659898,
          },
        };
        const paymentObj = new window.Razorpay(options);
        paymentObj.open();    

      } catch (error) {
        console.log(error)
      }
  }

  return (
    <>
      <Header />

      <div className="flex items-center justify-center w-full h-full ">
        <div className="w-full relative flex items-center justify-center">
          <button
            aria-label="slide backward"
            className="absolute z-30 left-0 ml-10 p-5 rounded-full bg-white"
            id="prev"
            onClick={goPrev}
          >
            <svg
              className="text-red-500"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 1L1 7L7 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
            <div
              id="slider"
              className="h-full flex lg:gap-1 md:gap-2 gap-14 items-center justify-start transition ease-out duration-700"
              style={{ transform: `translateX(${transformValue}px)` }}
            >
              {hotel?.gallery?.map((img, index) => (
                <div className="flex flex-shrink-0 relative w-full sm:w-auto">
                  <Image
                    src={img}
                    width={400}
                    height={200}
                    alt="black chair and white table"
                    className="object-cover object-center w-full h-auto"
                    key={index}
                  />
                  <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6"></div>
                </div>
              ))}
            </div>
          </div>
          <button
            aria-label="slide forward"
            className="absolute z-30 right-0 mr-10 bg-white p-5 rounded-full focus:outline-none "
            id="next"
            onClick={goNext}
          >
            <svg
              className="text-red-500"
              width="8"
              height="14"
              viewBox="0 0 8 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1L7 7L1 13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>


      <div className="flex w-full">
        <div className="w-8/12  my-1 p-5">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-bold">{hotel?.hotelName}</h3>
            <span className="bg-green-500 text-white font-bold mr-60 p-4">
              5.0*
            </span>
          </div>
          <div className="pt-5">
            <p className="text-2xl font-bold ">Amenities</p>
            <div className="flex flex-wrap ">
              {hotel?.hotelFacility?.map((facility, index) => (
                <span className="w-1/3 pb-2 flex items-center" key={index}>
                  <Image
                    src={facility?.img}
                    priority
                    alt=""
                    width={30}
                    height={0}
                    className="mr-2"
                  />
                  {facility?.name}
                </span>
              ))}

             
            </div>
          </div>
          <p className="text-2xl font-bold ">About this Oyo</p>
          <div className="mt-5">
            <p className="text-gray-600 font-bold">Location</p>
            <p className="text-gray-500 text-wrap">{hotel?.address}.
            </p>
          </div>

          <div className="mt-5">
            <p className="text-gray-600 font-bold">Special Features</p>
            <p className="text-gray-500 text-wrap">
              {hotel?.features}.
            </p>
          </div>
        </div>
        <div className="w-4/12  my-1 p-5 ">
          <p
            className="h-10 flex items-center  bg-red-500
          text-sm font-bold text-white pl-10
          "
          >
            LOGIN NOW TO GET UPTO 15% LOWER PRICES
          </p>

          <div className="px-10">
            <p>
              <span className="font-bold text-2xl pr-2">₹{hotel?.offerPrice}</span>
              <del className="text-gray-500">₹{hotel.realPrice}</del>
              <span className="text-orange-500 font-medium mr-5 ml-2">
                {hotel?.priceOff}% off
              </span>
            </p>
            <div className="flex">
              <p>Total Price</p>
              <p>₹{hotel?.offerPrice}</p>
            </div>
          </div>
          <button
           onClick={()=>handleBook(hotel._id)}
            className="w-full mt-40 h-12 text-lg font-bold bg-green-500 hover:cursor-pointer
         hover:bg-green-800 text-white my-5 rounded-lg 
         "
          >
            Continue to Book
          </button>
        </div>
      </div>
      <Script src="http://checkout.razorpay.com/v1/checkout.js" />
      <Footer />
    </>
  );
};

export async function getServerSideProps(ctx) {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels/${ctx.query.id}`);
  const data = await res.json();
  return {
    props: {
      hotel: data.data,
    },
  };
}
export default SingleHotel;
