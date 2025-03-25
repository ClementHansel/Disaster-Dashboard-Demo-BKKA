"use client";

import React from "react";
import { cn } from "@/app/lib/utils";

type CardProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

const Card: React.FC<CardProps> = ({ title, children, className }) => {
  return (
    <div className={cn("bg-white shadow-md rounded-2xl p-4", className)}>
      {title && <h3 className="text-lg font-semibold mb-2">{title}</h3>}
      <div>{children}</div>
    </div>
  );
};

export default Card;
