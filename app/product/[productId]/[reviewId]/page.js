'use client'
import {useSearchParams} from "next/navigation";

function Review ({params}) {
    return (
        <>
           <h1>Review #{params.reviewId} about product {params.productId}, friend </h1>
        </>
    )
}

export default Review