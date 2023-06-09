"use client";
import { signIn } from "next-auth/react";
import { AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { useCallback, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { Modal } from "./Modal";
import { Heading } from "../Heading";
import { Input } from "../inputs/Input";
import { toast } from "react-hot-toast";
import { Button } from "../Button";
import { useLoginModal } from "@/app/hooks/useLoginModal";
import { useRouter } from "next/navigation";
import { useRegisterModal } from "@/app/hooks/useRegisterModal";

export const LoginModal = () => {
  const router = useRouter();
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", { ...data, redirect: false }).then((callback) => {
      setIsLoading(false);
      if (callback?.ok) {
        toast.success("Logado com sucesso");
        router.refresh();
        loginModal.onClose();
      }
      if (callback?.error) {
        toast.error(callback.error);
      }
    });
  };

  const toogle = useCallback(() => {
    registerModal.onOpen();
    loginModal.onClose();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Bem-vindo de volta" subTitle="Entre na sua conta" />
      <Input
        id="email"
        label="Email"
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
          <div>Novo no Airbnb?</div>
          <div
            onClick={toogle}
            className="cursor-pointer text-neutral-800 underline"
          >
            Cadastre-se
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      title="Entrar"
      onSubmit={handleSubmit(onSubmit)}
      isOpen={loginModal.isOpen}
      onClose={loginModal.onClose}
      actionLabel="Continuar"
      body={bodyContent}
      footer={footerContent}
    />
  );
};
