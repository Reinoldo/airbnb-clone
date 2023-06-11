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
  icon,
  label,
  onClick,
  disabled,
  outline,
  small,
}) => {
  return (
    <button
      className={`w-full transition rounded-lg relatie disabled:opacity-70 disabled:cursor-not-allowed hover:opacity-80 ${
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-black text-white"
      } ${
        small
          ? "py-1 text-sm font-light border-[1px]"
          : "py-3 text-md font-semibold border-2"
      }
      `}
    >
      {" "}
      {label}
    </button>
  );
};
