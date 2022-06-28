import React, { useState } from 'react'
import ShoppingList from '../../components/ShoppingList'
import { Box } from '@mui/material'
export default function ShoppingListUI({lists}) {

   

    return <Box sx={{padding:5,width:"100%"}}>
        {lists.map((list, index) => {
            return (
                <ShoppingList key={list._id} list={list}/>
            )
        }
        )}
    </Box>


}
