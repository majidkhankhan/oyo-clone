import React from "react";
import Image from "next/image";

const Blog = ({ imgSrc, title, paragraph }) => {
  return (
    <>
      <div className="border-r border-gray-300 w-52 h-full flex items-center px-3">
        <Image
          src={imgSrc}
          alt="myHeight"
          width={200}
          height={200}
          className="w-10 h-10 rounded-full mr-5"
        />
      <div>
        <h3 className="font-bold">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-1">{paragraph}</p>
      </div>
      </div>
    </>
  );
};

export default Blog;
