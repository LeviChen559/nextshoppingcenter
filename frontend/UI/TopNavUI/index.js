import React from 'react'
import { Box, Button } from '@mui/material'
import Logo from '../../components/Logo'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useRouter } from 'next/router'

export default function TopNavUI() {
  const router=useRouter()
  return (
    <Box sx={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "90%", height: 75 }}>
      <Logo onClick={()=>{router.push("/")}}/>
      <Box>
        <Button >
          <AccountCircleIcon sx={{ color: "lightgray" }} />
        </Button>
        <Button onClick={()=>router.push("/cart") }>
          <ShoppingCartIcon sx={{ color: "lightgray" }} />
        </Button>
      </Box>
    </Box>
  )
}
