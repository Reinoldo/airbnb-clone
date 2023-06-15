"use client";

import React from "react";
import { IconType } from "react-icons";

interface CategoryBoxProps {
  key: string;
  icon: IconType;
  label: string;
  description: string;
}

export const CategoryBox: React.FC<CategoryBoxProps> = ({
  key,
  icon: Icon,
  label,
  description,
}) => {
  return (
    <div className="mx-4 flex flex-col p-4 text-sm hover:font-semibold">
      <div>
        <Icon size={45} className="p-2" />
      </div>
      <div>{label}</div>
    </div>
  );
};
