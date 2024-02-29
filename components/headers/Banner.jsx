import { useRouter } from "next/navigation";
import { commonAlert } from "../utilities/toast";

const Banner = () => {
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault()
    const cities = e.target.cities.value
    if(cities){

      router.push(`/hotels`);
    }
    else{
      commonAlert()
    }
  };
  return (
    <div>
      <div className="bg-gradient-to-r from-red-600 to-red-400 h-60">
        <div className="mx-10 p-5">
          <h2 className="text-4xl text-white text-center font-blod">
            Over 174,000+ hotels and homes across 35+ countries
          </h2>
        </div>
          <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-5 my-5 mx-20">
            <input
              type="text"
              name="cities"
              id=""
              placeholder="Search by city hotel, or neighborh..."
              className=" h-14 outline-none px-3
            text-lg border-r-2 border-gray-400
            col-span-2
            "
            />
            <input
              type="date"
              name=""
              id=""
              defaultValue="2024-02-20"
              placeholder="Search..."
              className=" h-14 outline-none px-3
            text-lg border-r-2 border-gray-400
            col-span-1
            "
            />

            <input
              type="date"
              name=""
              defaultValue="2024-01-30"
              className="outline-none px-3
            text-lg border-r-2 border-gray-400
            col-span-1
            "
            />
            <button
              type="submit"
              className="h-14 px-3 py-2 col-span-1 bg-green-600 hover:cursor-pointer hover:bg-green-800
            text-white text-xl
            "
            >
              Search
            </button>
        </div>
          </form>
        <div></div>
      </div>
    </div>
  );
};

export default Banner;
