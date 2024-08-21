import { unstable_noStore } from "next/cache";
import { getCabins } from "../_lib/data-service";

const { default: CabinCard } = require("./CabinCard");

async function CabinList({ filter }) {
  //With unstable_noStore() we can turn off the caching from the data that we will fetch in this page, this will make the entire route (from cabin page) dynamic
  //unstable_noStore();
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;
  switch (filter) {
    case "all":
      displayedCabins = cabins;
      break;
    case "small":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
      break;
    case "medium":
      displayedCabins = cabins.filter(
        (cabin) => cabin.maxCapacity <= 6 && cabin.maxCapacity > 3
      );
      break;
    case "large":
      displayedCabins = cabins.filter((cabin) => cabin.maxCapacity > 6);
      break;
  }

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {displayedCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}

export default CabinList;
