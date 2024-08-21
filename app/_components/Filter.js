"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchParams = useSearchParams();
  //remember to check if we are using next/router or next/navigation
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchParams.get("capacity") ?? "all";

  //In this method we are going to add the "capacity" filter to the url so we can retrieve it by the searchParams in other page
  function handleFilter(filter) {
    const params = new URLSearchParams(searchParams);
    //this lane builds the url but it doesn0t navigate to it
    params.set("capacity", filter);
    //with this we can set it in our urlBar and move to it, for that we need to construct the entire URL (pathname + our added params)
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex">
      <Button
        filter="all"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        All cabins
      </Button>
      <Button
        filter="small"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        1&mdash;3 guests
      </Button>
      <Button
        filter="medium"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        4&mdash;6 guests
      </Button>
      <Button
        filter="large"
        handleFilter={handleFilter}
        activeFilter={activeFilter}
      >
        8+ guests
      </Button>
    </div>
  );
}

function Button({ filter, handleFilter, activeFilter, children }) {
  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${
        filter === activeFilter && "bg-primary-500 text-primary-50"
      }`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
