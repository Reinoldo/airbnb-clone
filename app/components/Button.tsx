"use client";

import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export const Button: React.FC<ButtonProps> = ({
  icon: Icon,
  label,
  onClick,
  disabled,
  outline,
  small,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={` relative  w-full rounded-lg  transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-70 ${
        outline
          ? "border-black bg-white text-black"
          : "border-black bg-rose-500 text-white"
      } ${
        small
          ? "border-[1px] py-1 text-sm font-light"
          : "text-md border-2 py-3 font-semibold"
      }
      `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};
