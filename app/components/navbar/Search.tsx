"use-client";

export const Search = () => {
  return (
    <div className="border-[1px] w-full md:w-auto rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
      <div className="flex flex-row items-center justify-between">
        <div className="text-sm font-semibold px-6">Qualquer lugar</div>
        <div className="text-sm font-semibold px-6">Qualquer semana</div>
        <div className="text-sm font-thin px-6">Hóspedes</div>
        <div className="text-sm font-thin px-6">
          <button>click</button>
        </div>
      </div>
    </div>
  );
};
