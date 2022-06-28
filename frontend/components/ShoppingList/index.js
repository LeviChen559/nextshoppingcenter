import React from 'react'
import Image from 'next/image'
import { Box, Typography } from '@mui/material'

export default function ShoppingList({ list }) {
    return (
        <Box id={list._id} sx={{ display: "flex", flexDirection: "row", width: 500, 
        justifyContent: "space-around", alignItems: "center",marginBottom:"3%" }} >
            <Box style={{
                width: "50px", height: "50px", position: "relative",
                borderRadius: "50%", overflow: "hidden"
            }}>
                <Image src={list.imageUrl} alt={list.name} layout="fill" objectFit='cover'></Image>
            </Box>
            <Typography >{list.name}</Typography>
            <Typography>{list.color}</Typography>
            <Typography>order: {list.order}</Typography>
            <Typography>$:{list.price}</Typography>
        </Box>
    )
}
