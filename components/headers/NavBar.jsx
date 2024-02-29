const NavBar = () => {
  const cityList = [
    {
      name: "Gwalior",
    },
    {
      name: "Agra",
    },
    {
      name: "Delhi",
    },
    {
      name: "Lucknow",
    },
    {
      name: "patna",
    },
    {
      name: "Mumbai",
    },
  ];
  return (
    <div>
      <div className="flex px-10 bg-gray-100 justify-between py-3 ">
        {cityList.map((cityName,index)=>(
            <span key={index}>{cityName?.name}</span>
        ))}

      </div>
    </div>
  );
};

export default NavBar;
