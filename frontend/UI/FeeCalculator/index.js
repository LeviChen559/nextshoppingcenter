import React from 'react'
import { Box, Typography } from '@mui/material'
export default function FeeCalculator({ priceAll }) {
    const boxStyle = {
        borderRadius: "10px", border: "1px solid lightgrey", padding: "10px", width: "100%"
    }
    const lineStyle = {
        display: "flex", justifyContent: "space-between", width: "100%"
    }
    const lineStyle2 = {
        display: "flex", justifyContent: "space-between", width: "100%", borderTop: "1px solid lightgrey",
        marginTop: "5%", paddingTop: "5%"
    }
    const shippingFee = 20

    const tax = (priceAll) => {
        let fee = priceAll / 100 * 1.2
        return Number(fee.toFixed(2))
    }
        
    let taxFee = tax(priceAll)
    const Summary = (priceAll, tax, shippingFee) => {
        console.log(shippingFee)
        let Summary = priceAll + taxFee + shippingFee
        return Summary
    }
    return (
        <Box sx={boxStyle}>
            <Typography variant='h6'>Order Summary</Typography>
            <Box sx={lineStyle}>
                <Typography>Items:</Typography>
                <Typography>{priceAll}</Typography>
            </Box>
            <Box sx={lineStyle}>
                <Typography>Shipping & Handling:</Typography>
                <Typography>{shippingFee}</Typography>
            </Box>
            <Box sx={lineStyle}>
                <Typography>Total before tax:</Typography>
                <Typography>{priceAll + shippingFee}</Typography>
            </Box>
            <Box sx={lineStyle}>
                <Typography>Estimated GST/HST:</Typography>
                <Typography>{tax(priceAll)}</Typography>
            </Box>
            <Box sx={lineStyle}>
                <Typography>Estimated PST/RST/QST:</Typography>
                <Typography>0</Typography>
            </Box>
            <Box sx={lineStyle2}>
                <Typography variant='h5'>Order Total:</Typography>
                <Typography>{priceAll + shippingFee+taxFee}</Typography>
            </Box>
        </Box>
    )
}
