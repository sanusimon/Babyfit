"use client"

import { createClient, OAuthStrategy } from "@wix/sdk";
import { products , collections } from "@wix/stores";
import { currentCart } from "@wix/ecom";
import Cookies from "js-cookie";
import { createContext, useContext } from "react";


const refreshToken = JSON.parse(Cookies.get("refreshToken") || "{}")

const wixClient = createClient({
    modules: {
      products,
      collections,
      currentCart
    },
    auth: OAuthStrategy({
      clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
      tokens: {
        refreshToken,accessToken:{value:"" , expiresAt:0}
      },
    }),
  });


  
  export const WixClientContext = createContext();
  export const WixClientContextProvider = ({children}) =>{
    return <WixClientContext.Provider value={wixClient}>
        {children}
    </WixClientContext.Provider>
  }