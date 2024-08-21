//Global loading indicator, it works for the page.js of every part of the app, if we dont want it happening, we have to use "suspend"

import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return <Spinner />;
}
