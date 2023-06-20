"use client";

import { useRentModal } from "@/app/hooks/useRentModal";
import { Modal } from "./Modal";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";

export const RentModal = () => {
  const rentModal = useRentModal();

  return (
    <Modal
      isOpen={rentModal.isOpen}
      title="Anuncie seu espaço no Airbnb"
      actionLabel="asda"
      onClose={rentModal.onClose}
      onSubmit={rentModal.onClose}
    />
  );
};
