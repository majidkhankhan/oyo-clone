import React from "react";
import Image from "next/image";
import Link from "next/link";
const Hotel = ({hotels}) => {

  return (
    <>
      {hotels?.map((hotelsData, index) => (
    <div className="border-b-2 border-gray-200 rounded-lg  w-full mb-5 p-5">
        <div className="flex">
          <Image
            src={hotelsData.banner}
            width={200}
            height={600}
            className="w-96 h-large box mr-1"
            alt="hotelImage"
            key={index}
          />
          <div className="grid grid-rows-3">
            {hotelsData.gallery.map((img, index) => (
              <>
                <Image
                  src={img}
                  width={200}
                  height={200}
                  className="w-28 h-14"
                  alt="hotelImage"
                  key={index}
                />
              </>
            ))}
          </div>

          <div className="ml-20">
            <h2 className="font-bold text-2xl line-clamp-1">
              {hotelsData?.hotelName}
            </h2>
            <p className="text-justify my-5 text-lg">
              {hotelsData?.hotelLocation}
            </p>
            <p className="text-small my-5">
              <span className="bg-green-700 text-white font-bold ">5.0*</span>
              <span className="ml-2 text-gray-800">
                {/* {hotelsData?.hotelFacility} */}
              </span>
            </p>
            <div className="flex">
              <p>
                <span className="font-bold text-2xl">
                  ₹{hotelsData?.offerPrice}{" "}
                </span>
                <del className="text-gray-500">₹{hotelsData?.realPrice}</del>
                <span className="text-orange-500 font-medium mr-5 ml-2">
                  {hotelsData?.priceOff}% off
                </span>
              </p>
              <button className="border-2 border-black  font-bold p-2 mr-4">
                <Link href={`hotels/${hotelsData._id}`}>View Details</Link>
              </button>
              <button className="bg-green-500 font-medium  text-white p-2 mr-4">
                Book Now
              </button>
            </div>
          </div>
        </div>
    </div>
      ))}
    </>
  );
};

export default Hotel;
