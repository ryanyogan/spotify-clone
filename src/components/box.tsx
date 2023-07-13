"use client";

import clsx from "clsx";
import React from "react";

export default function Box({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={clsx("bg-neutral-900 rounded-lg h-fit w-full", className)}>
      {children}
    </div>
  );
}
