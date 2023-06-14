"use client";

import Image from "next/image";
import React from "react";

interface AvatarProps {
  image: string | null | undefined;
}

export const Avatar: React.FC<AvatarProps> = ({ image }) => {
  return (
    <Image
      alt="Avatar"
      src={image || "/images/placeholder.jpg"}
      className="rounded-full"
      width={30}
      height={30}
    />
  );
};
