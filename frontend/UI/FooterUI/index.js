import React from 'react'
import { Box, Button } from '@mui/material'
import Logo from '../../components/Logo'


export default function FooterUI() {
  return (
    <Box sx={{
      display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width:320,
      borderTop: "1px solid lightgrey", height: 75, marginTop:1
    }}>
      <Logo variant="logoSmall" fontSize={20} />
      © Copywrite by Levi Chen 2022
    </Box>
  )
}
