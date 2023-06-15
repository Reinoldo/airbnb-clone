"use client";

import Container from "../Container";
import { TbBeach } from "react-icons/tb";
import { CategoryBox } from "./CategoryBox";

const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "Perto da praia",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "Perto da praia",
  },
  {
    label: "Beach",
    icon: TbBeach,
    description: "Perto da praia",
  },
];
export const Categories = () => {
  return (
    <Container>
      <div className="flex overflow-x-auto pt-4">
        {categories.map((item) => (
          <CategoryBox
            key={item.label}
            icon={item.icon}
            label={item.label}
            description={item.description}
          />
        ))}
      </div>
    </Container>
  );
};
