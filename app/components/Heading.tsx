"use client";

interface HeadingProps {
  title: string;
  subTitle: string;
}

export const Heading: React.FC<HeadingProps> = ({ title, subTitle }) => {
  return (
    <>
      <div className="text-xl font-semibold">{title}</div>
      <div className="">{subTitle}</div>
    </>
  );
};
