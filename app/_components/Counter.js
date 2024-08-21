"use client";
//All components are server components by default, to dclare it as a Client component we use:

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((c) => c + 1)}>{count}</button>;
}
