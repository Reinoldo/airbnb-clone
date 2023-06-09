"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { Avatar } from "../Avatar";
import { useCallback, useState } from "react";
import { MenuItem } from "./MenuItem";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRentModal } from "@/app/hooks/useRentModal";
interface UserMenuProps {
  currentUser?: SafeUser | null;
}

export const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const rentModal = useRentModal();

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const rentOpen = useCallback(() => {
    if (!currentUser) return null;
    rentModal.onOpen();
  }, [currentUser, rentModal]);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          onClick={rentOpen}
          className="hidden cursor-pointer rounded-full px-4 py-3 text-sm font-semibold transition hover:bg-neutral-100 hover:shadow-md md:block"
        >
          Anuncie seu espaço no Airbnb
        </div>
        <div
          onClick={toggleOpen}
          className="flex cursor-pointer flex-row items-center gap-3 rounded-full border-[1px] border-neutral-200 p-4 transition hover:shadow-md md:px-3 md:py-2"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar image={currentUser?.image} />
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute right-0 top-12 w-[40vw] overflow-hidden rounded-lg bg-white text-sm shadow-md md:w-3/4">
          <div className="flex cursor-pointer flex-col">
            {currentUser ? (
              <>
                <MenuItem label="Mensagens" onClick={() => {}} />
                <MenuItem label="Viagens" onClick={() => {}} />
                <MenuItem label="Favoritos" onClick={() => {}} />
                <hr />
                <MenuItem label="Conta" onClick={() => {}} />
                <hr />
                <MenuItem label="Sair da conta" onClick={() => signOut()} />
              </>
            ) : (
              <>
                <MenuItem label="Cadastre-se" onClick={registerModal.onOpen} />
                <MenuItem label="Entrar" onClick={loginModal.onOpen} />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
