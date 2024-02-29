import React, { useEffect, useState } from "react";
import Hotel from "./hotel";
import Footer from "@/components/footers/page";
import Header from "@/components/headers/Header";
import Filter from "@/components/filter/page";
const Hotels = ({ hotelData }) => {
  const [facilitiesList, setfacilitiesList] = useState([]);
  const [price, setPrice] = useState(3500);
  const [list, setList] = useState([]);
  const facilityHandle = async () => {
    try {
      const response = await fetch(`/api/filters/search?val=${facilitiesList}`);
      const res = await response.json();
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const priceHandle = async (e) => {
    const value = e?.target?.value;
    setPrice(value);
    try {
      const response = await fetch(`/api/filters/range?price=${value}`);
      const res = await response.json();
      setList(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  function debouncing(callback, delay) {
    let timeoutid;
    return function (...args) {
      if (timeoutid) clearTimeout(timeoutid);
      timeoutid = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }

  const debounced = debouncing(priceHandle,500) 
 

  useEffect(() => {
    if (price) {
      debounced();
    }
  }, []);


  useEffect(() => {
    if (facilitiesList) {
      facilityHandle();
    }
  }, [facilitiesList]);
  return (
    <>
      <Header />
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <Filter
            facilitiesList={facilitiesList}
            setfacilitiesList={setfacilitiesList}
            price={price}
            priceHandle={debounced}
          />
        </div>
        <div className="col-span-9">
          <div className="m-5">
            {list?.length > 0 ? (
              <Hotel hotels={list} />
            ) : (
              <Hotel hotels={hotelData} />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export async function getServerSideProps() {
  const res = await fetch(`${process.env.BASE_URL}/api/hotels`);
  const data = await res.json();
  return {
    props: {
      hotelData: data.result,
    },
  };
}

export default Hotels;
