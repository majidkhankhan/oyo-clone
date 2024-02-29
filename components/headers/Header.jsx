import Image from "next/image";
import Logo from "../../public/images//logo.png";
import global from "../../public/images/global-partner-svg.svg";
import Block from "./Blog";
import Link from "next/link";
import PropertyIcon from "../../public/images/property.svg";
import firstcardIcon from "../../public/images/firstcard.svg";
// import phoneIcon from "../../public/images/phoneicon.svg";
import login from "../../public/images/login-profile.svg";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { logoutAlert } from "../utilities/toast";
const Header = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  useEffect(() => {
    if (typeof window !== "undefined") {
      let auth = localStorage.getItem("token");
      setToken(auth);
    }
  }, []);

  const handleLogOut = () => {
     logoutAlert(()=>{
      localStorage.clear();
      setToken("");
      router.push("/");
     })
   
  };
  
  return (
    <>
      <div className="flex justify-between border-b-2 border-gray-300 items-center h-24 px-10">
        <Link href={"/"}>
          {" "}
          <Image
            src={Logo}
            alt="logo"
            width={200}
            height={200}
            className="w-28 h-28"
          />
        </Link>
        <div className="h-full flex">
          <Block
            imgSrc={firstcardIcon}
            title={"OYO for business"}
            paragraph={"trusted by 5000 Corporates"}
          />
          <Block
            imgSrc={PropertyIcon}
            title={"List  property"}
            paragraph={"Start earning 30mins"}
          />
          <Block
            imgSrc={firstcardIcon}
            title={"0190910"}
            paragraph={"call us to book now"}
          />
          <Block
            imgSrc={global}
            title={"Become  member"}
            paragraph={"click and bececause a member"}
          />
         
          <div className="flex items-center px-3 hover:bg-gray-200 cursor-pointer">
            {token ? (
              <>
                <Image
                  src={login}
                  alt="login"
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-fill mr-5 "
                />
               <h3 className="font-bold cursor-pointer" onClick={handleLogOut}>Logout</h3>
              </>
            ) : (
              <Link href="/login">
                <Image
                  src={login}
                  alt="login"
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-fill mr-5"
                />
                <h3 className="font-bold">Login / Signup</h3>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
