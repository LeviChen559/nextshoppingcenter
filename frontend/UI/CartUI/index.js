import React,{useState} from 'react'
import { Box, Typography } from '@mui/material'
import ShoppingListUI from '../ShoppingListUI'
import FeeCalculator from '../FeeCalculator'
export default function CardUI() {

    const boxStyle = {
        height: "70vh", width: "100%", display: "flex",
        flexDirection: "column", justifyContent: "flex-start", alignItems: "center"
    }
    const [lists, setList] = useState([{
        _id: new Date(),
        name: "iphone 14",
        imageUrl: "https://images.unsplash.com/photo-1641460228815-1774d9dce009?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1612&q=80",
        order: 1,
        price: 1299,
        color:"white"
    },
    {   _id: new Date(),
        name: "Cannon EOS-1D",
        imageUrl:
          "https://images.unsplash.com/photo-1519183071298-a2962feb14f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
        description:
          "The EOS-1D X combines speed with image quality, to create the next generation camera for professionals. Full frame 18 megapixel sensor with Dual “DIGIC 5+” processors sets the standard, and up to 12 frames per second shooting takes it beyond.",
        price: 1300,
        order: 1,
        color:"--"
      },])
        const Summary=(items)=>{
            let summary=0
            items.map((item,index)=>summary+=items[index].price)
            return summary
        }
      const listAll=Summary(lists)
   
      console.log(listAll)
    return (
        <Box sx={boxStyle}>
            <Typography variant='h5' sx={{ margin: "2.5% 0" }}> Shopping Cart</Typography>
            <Box>
                <Box sx={{
                    border: "1px solid lightgrey", borderRadius: 3, padding: "10px", height: 700,
                    width: 1020, display: "flex", flexDirection: "row"
                }}>
                    <ShoppingListUI lists={lists} />
                    <FeeCalculator priceAll={listAll} />
                </Box>

            </Box>
        </Box>
    )
}
