"use client";

import Container from "../Container";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { CategoryBox } from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Praia",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Catavento",
    icon: GiWindmill,
    description: "This property is has windmills!",
  },
  {
    label: "Moderno",
    icon: MdOutlineVilla,
    description: "This property is modern!",
  },
  {
    label: "Interior",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Piscinas",
    icon: TbPool,
    description: "This is property has a beautiful pool!",
  },
  {
    label: "Ilhas",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lago",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Esquiar",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Castelos",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Cavernas",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Acampamento",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Artico",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Deserto",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Celeiros",
    icon: GiBarn,
    description: "This property is in a barn!",
  },
  {
    label: "Luxo",
    icon: IoDiamond,
    description: "This property is brand new and luxurious!",
  },
];

export const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();
  const isMainPage = pathName === "/";

  return (
    <Container>
      <div className="flex items-center justify-between overflow-x-auto pt-4">
        {categories.map((item) => (
          <CategoryBox
            selected={category === item.label}
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
