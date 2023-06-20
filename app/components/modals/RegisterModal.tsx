"use client";
import axios from "axios";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Modal } from "./Modal";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { toast } from "react-hot-toast";
import { Button } from "../Button";
import { signIn } from "next-auth/react";
import { useLoginModal } from "@/app/hooks/useLoginModal";

export const RegisterModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post("api/register", data)
      .then(() => {
        registerModal.onClose();
      })
      .catch((error) => {
        toast.error("Algo deu errado.", {
          duration: 5000,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const toogle = useCallback(() => {
    loginModal.onOpen();
    registerModal.onClose();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Bem-vindo ao Airbnb" subTitle="Crie uma conta" />
      <Input
        id="email"
        label="Email"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Nome"
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Senha"
        register={register}
        errors={errors}
        required
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        icon={FcGoogle}
        outline
        label="Continuar com Google"
        onClick={() => signIn("google")}
      />
      <Button
        icon={AiFillGithub}
        outline
        label="Continuar com Github"
        onClick={() => signIn("github")}
      />
      <div className="mt-3 text-center font-light text-neutral-500">
        <div className="flex items-center justify-center gap-2">
          <div>Já tem uma conta?</div>
          <div
            onClick={toogle}
            className="cursor-pointer text-neutral-800 underline"
          >
            Entre
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      title="Cadastra-se"
      onSubmit={handleSubmit(onSubmit)}
      isOpen={registerModal.isOpen}
      onClose={registerModal.onClose}
      actionLabel="Continuar"
      body={bodyContent}
      footer={footerContent}
    />
  );
};
