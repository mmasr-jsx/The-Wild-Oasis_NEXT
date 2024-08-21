import Cabin from "@/app/_components/Cabin";
import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import { getCabin, getCabins } from "@/app/_lib/data-service";

import { Suspense } from "react";

/* export const metadata = {
  title: "Cabin",
}; */

//Another use for the params is the "generateMetadata" function that we can access
export async function generateMetadata({ params }) {
  const { name } = await getCabin(params.cabinId);
  return { title: `Cabin ${name}` };
}

//In this case, we know the 8 ID's that we are fetching, so we can give this data to next.js so it renders this pages as static to improve performance,
// we can do this with generateStaticParams
export async function generateStaticParams() {
  const cabins = await getCabins();

  const ids = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  return ids;
}

//Any page or layout associated with a dynamic route segment (thats way its called [cabinId]) gets acces to a "params" argument/prop
export default async function Page({ params }) {
  /* //Fetching all this data that has nothing in comon makes every request wait until the previous one finishes fetching them in cascaed, in cases with bigger payloads it will be a problem
  const cabin = await getCabin(params.cabinId);
  const settings = await getSettings();
  const bookedDates = await getBookedDatesByCabinId(params.cabinId);
  */

  //To fetch diferent requests in parallel we can work like this:
  /*  const [cabin, settings, bookedDates] = await Promise.all([
    getCabin(params.cabinId),
    getSettings(),
    getBookedDatesByCabinId(params.cabinId),
  ]); */

  //And finally. other way and what we are doing here, is using streaming, we created Reservation component,
  // and used Suspend what we only need there, so the user can see the rest of info meanwhile
  const cabin = await getCabin(params.cabinId);

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-5xl font-semibold text-center mb-10 text-accent-400">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>

        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
