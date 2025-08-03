import React from "react";
import CompanionForm from "@/components/CompanionForm";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { newCompanionPermissions } from "@/lib/actions/companion.actions";
import Image from "next/image";
import Link from "next/link";

const NewCompanion = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");
  const canCreateCompanions = await newCompanionPermissions();
  return (
    <main className={"min-lg:w-1/3 min-md:w-2/3 items-center justify-center"}>
      {canCreateCompanions ? (
        <article className={"w-full gap-4 flex flex-col"}>
          <h1>Companion Builder</h1>

          <CompanionForm />
        </article>
      ) : (
        <article className={"companion-limit"}>
          <Image
            src={"/images/limit.svg"}
            alt={"Companion Limit"}
            width={230}
            height={130}
          />
          <div className={"cta-badge"}>Upgrade Your Plan</div>
          <h1>You&apos;ve Reached Your Limit</h1>
          <p>
            You have reached your Companion limit. Upgrade your plan to create
            more and unlock more features.
          </p>
          <Link
            href={"/subscription"}
            className={"btn-primary w-full justify-center mb-5"}
          >
            Upgrade My Plan
          </Link>
        </article>
      )}
    </main>
  );
};
export default NewCompanion;
