"use client";

import { useState } from "react";

export function ExpandablePill({
  value,
  collapsedClassName = "",
}: {
  value: string;
  collapsedClassName?: string;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => setExpanded((current) => !current)}
      className={`rounded-full bg-paper px-4 py-2 text-left text-muted transition hover:bg-[#e9eef7] ${expanded ? "max-w-full whitespace-normal break-words" : collapsedClassName}`}
      aria-expanded={expanded}
      title={expanded ? "Collapse full path" : "Expand full path"}
    >
      {value}
    </button>
  );
}
