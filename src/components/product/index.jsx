import React, { useEffect } from 'react';
import { getAllProduct } from '../../api/apiProduct';
const ProductList = () => {
    useEffect(() => {
        getAllProduct().then((res) => {
            console.log(res)
        })
    },[])
    return (
        <div></div>
    )
}

export default ProductList;