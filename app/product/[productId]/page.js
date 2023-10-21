'use client'
import {useSearchParams} from "next/navigation";

function ProductDetail ({params}) {
    return (
        <>
           <h1>Details about product {params.productId}, friend </h1>
        </>
    )
}

export default ProductDetail