"use client";


import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import CartModal from "./CartModal";
import Cookies from "js-cookie";
// import { useCartStore } from "@/hooks/useCartStore";
import './Header.scss'
import { useWixClient } from "@/hooks/useWixClient";
import { useCartStore } from "@/hooks/useCartStore";
import SearchBar from "@/Components/SearchBar/SearchBar";
import Breadcrumbs from "@/Components/Breadcrumbs/Breadcrumbs";

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const pathName = usePathname();

  const wixClient = useWixClient();




  const isLoggedIn = wixClient.auth.loggedIn();

  

  // TEMPORARY
  // const isLoggedIn = false;


// AUTH WITH WIX-MANAGED AUTH

//   const wixClient = useWixClient();

 
  

    const {cart, counter, getCart} = useCartStore();

     useEffect(() => {
      if (isLoggedIn) {
        
        getCart(wixClient); // Fetch the cart when the user is logged in
      }
    }, [wixClient, getCart, isLoggedIn]);

    const handleProfile = () => {
      if (!isLoggedIn) {
        router.push("/login");
      } else {
        setIsProfileOpen((prev) => !prev);
      }
    };

    useEffect(() => {
      if (isLoggedIn && !sessionStorage.getItem("hasReloaded")) {
        sessionStorage.setItem("hasReloaded", "true"); // Set flag
        window.location.reload(); // Reload once
      }
    }, [isLoggedIn]);
    

//   const { cart, counter, getCart } = useCartStore();




const handleLogout = async () => {
    setIsLoading(true);
    Cookies.remove("refreshToken");
    const { logoutUrl } = await wixClient.auth.logout(window.location.href);
    setIsProfileOpen(false);
    router.push(logoutUrl);
    
  };

  useEffect(() => {
    
  }, [wixClient]);

  
    return (
    <header className='header'>
        <div className='container'>
            <div className='inner_'>
              <div>
                <div className='logo'>
                    <h1>
                      <Link href={'/'}><img src="./logo.png" /></Link>
                    </h1>
                </div>
                <div className='navigation'>
                    <ul>
                        {/* <li><Link onClick={login} href={'/'}>Home</Link></li> */}
                        {/* <li><Link href={'/category/electronics'}>Home</Link></li> */}
                        {/* <li><Link href={{}}>About</Link></li>
                        <li><Link href={{}}>Boys</Link></li>
                        <li><Link href={{}}>Girls</Link></li> */}
                    </ul>
                </div>
                </div>
                <div className="right_sec">
                <SearchBar />
                <div className='pro_cart'>
                    <div href={"/profile"} className='profile'
                     onClick={handleProfile}
                    // onClick={login}
                     >
                      {isProfileOpen ? "Login" : "Login"} <img src="./user.png" /> 
                        {isProfileOpen && (
                            <div className="absolute p-4 rounded-md top-12 left-0 bg-white text-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
                            <Link href="/profile">Profile</Link>
                            <div className="mt-2 cursor-pointer" onClick={handleLogout}>
                                {isLoading ? "Logging out" : "Logout"}
                            </div>
                            </div>
                        )}
                    
                    </div>
                    <Link href={"/cart"} className='cart'> <img src="./shopping-cart.png" /> <span className='count'>{counter}</span></Link>
                </div>
                </div>
            </div>
           
        </div>
    </header> 
  )
}

export default Header