"use client";

import { useBalance } from "@repo/store/useBalance";

export default function() : JSX.Element {
  const balance = useBalance();
  return <div>
    hi there {balance}
  </div>
}
