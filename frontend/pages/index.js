import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import ProductUI from '../UI/ProductUI'
import { Box } from '@mui/material'
import TopNavUI from '../UI/TopNavUI'
import FooterUI from '../UI/FooterUI'
export default function Home() {


  return (
    <Box  style={{display:"flex",flexDirection:"column",justifyContent:"space-between", alignItems:"center",height:"100%"}}>
       <Head>
        <title>Next Store</title>
        <meta name="description"
          content="This project demonstrates the skill set of a MERN developer, including MongoDB, Express, React, and Node." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      
       <TopNavUI/>
        <ProductUI/>
        <FooterUI/>
    </Box>

  )
}
