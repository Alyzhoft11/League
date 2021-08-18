/* This example requires Tailwind CSS v2.0+ */
import React from "react";

export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-full h-full sm:p-4 lg:p-8">{children}</div>;
}
