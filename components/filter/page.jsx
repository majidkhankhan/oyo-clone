import { useEffect, useState } from "react";
const Filter = ({ price, setfacilitiesList,priceHandle }) => {
  const [facility, setFacility] = useState([]);
  const facilities = async () => {
    const response = await fetch("/api/filters/facility");
    const res = await response.json();
    setFacility(res.data);
  };
  useEffect(() => {
    facilities();
  }, []);

  const handleCheckList = (e) => {
    let newList = [];
    if (e.target.checked) {
      newList.push(e.target.value);
      setfacilitiesList(newList);
      return;
    }
    newList = newList.filter((i) => i !== e.target.value);
    setfacilitiesList(newList);
  };
  return (
    <>
      <div className="border-2 border-red-500 rounded-md m-5 h-auto py-10 px-3">
        <label htmlFor="price" className=" text-xl mr-3 font-bold">
          Price :{price||300}
        </label>
        <input
          type="range"
          name="price"
          id="price"
          min={300}
          max={3500}
          onChange={priceHandle}
        />
        <div>
          {/* <button
            className=" w-40 h-10 bg-green-300 cursor-pointer my-3"
            // onClick={handlePrice}
          >
            Search
          </button> */}
        </div>
        <div className=" my-10 ">
          <h3 className=" text-xl font-bold my-3">Filter by Facilities : </h3>
          {facility.map((list, index) => (
            <>
              <p className="flex items-center font-bold" key={index}>
                <label htmlFor="checkbox" className="col-span-2">
                  {list}
                </label>
                <input
                  type="checkbox"
                  name="ckeckbox"
                  id="checkbox"
                  value={list}
                  className=" w-5 h-5 ml-3 col-span-1"
                  onChange={handleCheckList}
                />
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Filter;
