import React from 'react'
import {PricingTable} from "@clerk/nextjs";

const Subscription = () => {
    return (
        <div>
            <p className={"text-2xl text-center font-bold mt-5 "}>
                Subscription Plans to suit your Learning needs
            </p>
            <div className={"mt-5 flex md:mx-4 sm:mx-9 "}>
            <PricingTable/>
            </div>
        </div>
    )
}
export default Subscription
