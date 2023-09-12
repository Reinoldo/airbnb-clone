"use client";

import { useRentModal } from "@/app/hooks/useRentModal";
import { Modal } from "./Modal";
import { useForm, FieldValues } from "react-hook-form";
import { Heading } from "../Heading";
import { categories } from "../navbar/Categories";
import { CategoryInput } from "../inputs/CategoryInput";
import { useState, useMemo } from "react";
import { CountrySelect } from "../inputs/CountrySelect";

import dynamic from "next/dynamic";
import { Counter } from "../inputs/Counter";

enum STEPS {
  CATEGORY = 0,
  LOCATION = 1,
  INFO = 2,
  IMAGES = 3,
  DESCRIPTION = 4,
  PRICE = 5,
}
export const RentModal = () => {
  const rentModal = useRentModal();
  const [step, setStep] = useState(STEPS.CATEGORY);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      lecation: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageSrc: "",
      price: 1,
      title: "",
      description: "",
    },
  });

  const category = watch("category");
  const location = watch("location");
  const guestCount = watch("guestCount");
  const roomCount = watch("roomCount");
  const bathroomCount = watch("bathroomCount");

  const Map = useMemo(
    () =>
      dynamic(() => import("../Map").then((map) => map.Map), {
        ssr: false,
      }),
    [location]
  );

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  const onBack = () => {
    setStep((value) => value - 1);
  };

  const onNext = () => {
    setStep((value) => value + 1);
  };

  const actionLabel = useMemo(() => {
    if (step === STEPS.PRICE) return "Criar";
    return "Próximo";
  }, [step]);

  const secondaryActionLabel = useMemo(() => {
    if (step === STEPS.CATEGORY) return undefined;
    return "Voltar";
  }, [step]);

  let bodyContent = (
    <div className="flex flex-col gap-8">
      <Heading
        title="Qual destas opções melhor descreve o seu lugar?"
        subTitle="Escolha uma categoria"
      />
      <div className="grid max-h-[50vh] grid-cols-1 gap-3 overflow-y-auto md:grid-cols-2">
        {categories.map((item) => (
          <div key={item.label} className="col-span-1">
            <CategoryInput
              onClick={(label) => setCustomValue("category", label)}
              selected={category === item.label}
              label={item.label}
              icon={item.icon}
            />
          </div>
        ))}
      </div>
    </div>
  );

  if (step === STEPS.LOCATION) {
    bodyContent = (
      <div>
        {" "}
        <Heading
          title="Onde fica sua acomodação?"
          subTitle="Seu endereço só é compartilhado com os hóspedes depois que a reserva é confirmada."
        />
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-8">
        <Heading
          title="Compartilhe algumas informações básicas do seu cantinho"
          subTitle="Que comodidades você tem?"
        />
        <Counter
          title="Número de hospedes"
          subtitle="Quantos hóspedes?"
          onChange={(value) => setCustomValue("guestCount", value)}
          value={guestCount}
        />
        <Counter
          title="Número de quartos"
          subtitle="Quantos quartos?"
          onChange={(value) => setCustomValue("roomCount", value)}
          value={roomCount}
        />
        <Counter
          title="Quantidade de banheiros"
          subtitle="Quantos banheiros?"
          onChange={(value) => setCustomValue("bathroomCount", value)}
          value={bathroomCount}
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={rentModal.isOpen}
      title="Anuncie seu espaço no Airbnb"
      actionLabel={actionLabel}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
      onClose={rentModal.onClose}
      onSubmit={onNext}
      body={bodyContent}
    />
  );
};
