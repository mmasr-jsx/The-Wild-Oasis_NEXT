import Counter from "@/app/_components/Counter";
import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import CabinList from "../_components/CabinList";
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

//If we need to revalidate cache, with this line we can force the route to become dynamic so it has to regenerate for each request
//export const revalidate = 0; this will set the time to revalidate to 0 so it basically makes the page dynamic

//A middle ground between having the page static or dynamic is the "Incremental Static Regeneration (ISR), we will revalidate the cache from time to time:"
// with 3600 seconds it will revalidate the cache every hour, we can specify the value but it always have to be in seconds
export const revalidate = 3600;

export const metadata = {
  title: "Cabins",
};

//"searchParams" is only available on "Pages", we can retrieve data from the url with it
export default async function Page({ searchParams }) {
  const filter = searchParams?.capacity ?? "all";

  return (
    <div>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      {/*  Easy explain, suspense let us replace the component until is rendered by another one like an spinner,
       here is a good example cause the rest of the content on this page is static and doesn't need to wait */}
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}
