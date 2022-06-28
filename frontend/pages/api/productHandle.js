// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios"

export const getAllProducts = async ( ) => {
  
  const URL = `${process.env.PORT }+/api/products`
  // console.log("URL",URL)
  try{
      const res = await axios.get("http://localhost:3750/api/products" )
      return res.data
  }catch(err){
      console.log(err.message)
  }
}
