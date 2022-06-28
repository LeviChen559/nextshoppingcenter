import  React, { useEffect, useState, useRef } from 'react';
import Product from '../../components/product';
import { getAllProducts } from '../../pages/api/productHandle'
import { Box } from '@mui/material';
export default function ProductUI() {

    const [products, setProducts] = useState([]);

    let excutedRef = useRef(false);

    useEffect(() => {
        if (excutedRef.current) {
            return;
        }
        const loadData = async () => {
            const res = await getAllProducts()
            console.table(res)
            setProducts(res)
        }
        loadData()
        excutedRef.current = true

    }, [])

    return (
        <Box sx={{display:"flex", flexDirection:"row",flexWrap:"wrap" ,width:"90%",justifyContent:"center",height:"85%"}}>
            {products.map((product,index)=>{
                return(
                    <Product key={product._id}  product={product}  />
                )
            })}

        </Box>
    )
}
