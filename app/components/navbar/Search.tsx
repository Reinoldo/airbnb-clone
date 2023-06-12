"use-client";

import { BiSearch } from "react-icons/bi";

export const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="px-6 text-sm font-semibold">Qualquer lugar</div>
        <div className="text-sm font-semibold px-6 border-x-[1px] flex-1 text-center">
          Qualquer semana
        </div>
        <div className="flex flex-row items-center gap-3 pl-6 text-sm text-gray-600">
          <div className="hidden sm:block">Hóspedes?</div>
          <div className="p-2 bg-[#ff385c] rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};
