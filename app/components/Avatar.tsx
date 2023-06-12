"use client";

import Image from "next/image";

export const Avatar = () => {
  return (
    <Image
      alt="Avatar"
      src="/images/placeholder.jpg"
      className="rounded-full"
      width={30}
      height={30}
    />
  );
};
