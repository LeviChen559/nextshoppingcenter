import React,{useState} from 'react';
import Image from 'next/image';
import { Box, Button, CardContent, CardActions, Card, Typography } from '@mui/material';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function Product({ product }) {
    const [number,setNunber]=useState(0)
    const [expand,setExpand]=useState({
        cardHeight:450,
        height:75,
        words:150,
        etc:"...",
        ArrowDropDownIcon:"flex",
        ArrowDropUpIcon:"none"
    })
    const handleNumber=(type)=>{
        if(type==="increase"){
           number< product.countInStock&&setNunber(pre=>pre+1)
        } else if (type==="decrease"){
            number>0&&setNunber(pre=>pre-1)}
    }
    const handleHight=()=>{
        if(expand.height===75){
            setExpand({...expand,cardHeight:550,height:200,words:1000,etc:"",ArrowDropDownIcon:"none",
            ArrowDropUpIcon:"flex" })
            
        }else if(expand.height===200){
            setExpand({...expand,cardHeight:450,height:75,words:150,etc:"...", ArrowDropDownIcon:"flex",
            ArrowDropUpIcon:"none"})

        }
    }
    return (
        <Card sx={{ maxWidth: 345, margin: 1, display: "flex", flexDirection: "column", justifyContent: "space-between",height:expand.cardHeight }} id={product._id}>
            <Image src={product.imageUrl} height={225} width={345} objectFit="cover" alt={product.name} />
            <CardContent>
                <Box sx={{display:"flex", flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {product.name.substring(0,15)}
                </Typography>
                <Typography variant="body2" color="text.secondary" >
                    Price: ${product.price}
                </Typography>

                </Box>
                <Typography variant="body2" color="text.secondary" sx={{ height: expand.height }}>
                    {product.description.substring(0, expand.words) + expand.etc}
                </Typography>
                <Box sx={{ display:"flex",justifyContent:"flex-end" }} >
                    <Button onClick={handleHight} id={product._id} sx={{display:expand.ArrowDropDownIcon, padding:0}}>
                        <ArrowDropDownIcon />
                    </Button>
                    <Button onClick={handleHight} id={product._id} sx={{display:expand.ArrowDropUpIcon,padding:0}}>
                    <ArrowDropUpIcon />
                    </Button>
                </Box>
                <Typography variant="body2" color="text.secondary" >
                    Stock: {product.countInStock}
                </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center",padding:"4px" }}>
                <Button onClick={()=>handleNumber("decrease")}>
                    <ArrowLeftIcon  />
                </Button>
                <input tyep="number"  value={number}style={{ width: 50, textAlign:"center" }} />
                <Button onClick={()=>handleNumber("increase")}>
                    <ArrowRightIcon />
                </Button>
                <Button>
                    <AddShoppingCartIcon />
                </Button>
            </CardActions>
        </Card>
    )
}
