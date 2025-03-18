import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "@/components/common/button/Button";
import FormInput from "@/components/common/input/FormInput";

import { AuthFormValues } from "./types";
import { useSignupForm } from "./useSignupForm";

export default function Signup() {
  const navigate = useNavigate();

  const {
    isEmailChecked,
    methods,
    handleEmailCheck,
    isDuplicate,
    handleSignup
  } = useSignupForm();

  const onSubmit = (data: AuthFormValues) => {
    handleSignup(data);
    navigate("/login");
  };

  return (
    <section className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4 w-64"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="Email" type="email" />
          {isEmailChecked ? (
            isDuplicate ? (
              <p className="text-red-500 text-sm">
                이미 존재하는 아이디 입니다.
              </p>
            ) : (
              <p className="text-blue-500 text-sm">
                사용 가능한 아이디 입니다.
              </p>
            )
          ) : null}
          <Button className="text-sm" onClick={handleEmailCheck} type="button">
            중복체크
          </Button>
          <FormInput name="authCode" label="인증번호" type="text" />
          <Button className="text-sm" onClick={() => {}}>
            인증확인
          </Button>
          <FormInput name="password" label="Password" type="password" />
          <FormInput
            name="passwordConfirm"
            label="Password Confirm"
            type="password"
          />
          <Button type="submit">Signup</Button>
        </form>
      </FormProvider>
    </section>
  );
}
