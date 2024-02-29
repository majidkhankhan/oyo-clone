import React from "react";
import Image from "next/image";
import FireImg from "@/public/images/fire.jpg";
const Bannertwo = () => {
  return (
    <div className="flex justify-between items-center my-14 border-2 border-gray-300 px-5">
      <div className="flex items-center">
        <Image
          src={FireImg}
          width={200}
          height={200}
          className="w-32 h-32 rounded-full mr-5"
        />
      </div>
      <div className="text-xl">
        <p className="font-bold">Get access to exclusive deals</p>
        <p>Only the best deals reach your inbox</p>
      </div>
      <div className="flex">
        <input
          type="email"
          className="px-6 py-3 rounded-lg  outline-none border border-gray-300 mr-5 w-80 h-16"
          placeholder="kk"
        />
        <button className="w-24 h-14 bg-red-500 text-xl text-white">
          Notify
        </button>
      </div>
    </div>
  );
};

export default Bannertwo;
