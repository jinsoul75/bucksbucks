import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import naver from "@/assets/images/naver.webp";
import kakao from "@/assets/images/kakao.webp";
import google from "@/assets/images/google.webp";

import Image from "@/components/image/Image";
import Button from "@/components/common/button/Button";
import FormInput from "@/components/common/input/FormInput";

import { useLoginForm } from "./useLoginForm";
import { LoginFormValues } from "./type";

export default function Login() {
  const navigate = useNavigate();

  const { methods, handleLogin } = useLoginForm();

  const onSubmit = (data: LoginFormValues) => {
    handleLogin(data);
    navigate("/dashboard");
  };

  return (
    <section className="w-full min-h-[calc(100vh-120px)] flex flex-col gap-5 items-center justify-center">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4 w-64"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="Email" type="email" />
          <FormInput name="password" label="Password" type="password" />

          <Button type="submit">Sign In</Button>
        </form>
      </FormProvider>

      <div>또는</div>

      <div className="flex gap-5">
        <Image
          src={kakao}
          alt="kakao"
          className="w-10 h-10 hover:cursor-pointer"
        />
        <Image
          src={google}
          alt="google"
          className="w-10 h-10 hover:cursor-pointer"
        />
        <Image
          src={naver}
          alt="naver"
          className="w-10 h-10 hover:cursor-pointer"
        />
      </div>
    </section>
  );
}
