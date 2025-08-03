import React from "react";
import { PricingTable } from "@clerk/nextjs";

const Subscription = () => {
  return (
    <main>
      <p className={"text-4xl text-center font-bold mt-5 "}>Available Plans</p>
      <div>
        <PricingTable />
      </div>
    </main>
  );
};
export default Subscription;
