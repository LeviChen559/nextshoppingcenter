import React from 'react'
import { Typography,Box } from '@mui/material'
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
export default function Logo({fontSize=28,variant="logo",onClick=()=>{}}) {
  return (

  <Box sx={{display:"flex", alignItems:"center"}} onClick={onClick}>
    <ElectricBoltIcon sx={{color:"orange",fontSize: fontSize,marginRight:1}}/>
      <Typography variant={variant}>Next</Typography>
  </Box>

  )
}
