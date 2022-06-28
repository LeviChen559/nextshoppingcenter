import React from 'react'
import { Box } from '@mui/material'
import Head from 'next/head'
import TopNavUI from '../UI/TopNavUI'
import FooterUI from '../UI/FooterUI'
import CardUI from '../UI/CartUI'
export default function cart() {
  return (
    <Box style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center", height: "100%",width:"100%" }}>
      <Head>
        <title>Next Store</title>
        <meta name="description"
          content="This project demonstrates the skill set of a MERN developer, including MongoDB, Express, React, and Node." />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <TopNavUI />
      <CardUI/>
      <FooterUI />
    </Box>
  )
}
