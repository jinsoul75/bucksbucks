import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import Button from "@/components/common/button/Button";
import FormInput from "@/components/common/input/FormInput";
import { AuthFormValues } from "./types";
import { useSignupForm } from "./useSignupForm";

export default function Signup() {
  const navigate = useNavigate();

  const {
    handleEmailCheck,
    handleEmailSend,
    handleSignup,
    handleAuthCodeVerify,
    isEmailChecked,
    methods,
    duplicateResult,
    isSubmitting
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
          <FormInput name="email" label="이메일" type="email" />
          {isEmailChecked ? (
            <p
              className={`${
                duplicateResult?.resultData ? "text-red-500" : "text-blue-500"
              } text-sm`}
            >
              {duplicateResult?.message}
            </p>
          ) : null}
          <Button className="text-sm" onClick={handleEmailCheck} type="button">
            중복체크
          </Button>
          <Button className="text-sm" onClick={handleEmailSend} type="button">
            인증번호 전송
          </Button>
          <FormInput name="authCode" label="인증번호" type="text" />
          <Button className="text-sm" onClick={handleAuthCodeVerify}>
            인증확인
          </Button>
          <FormInput name="password" label="비밀번호" type="password" />
          <FormInput
            name="passwordConfirm"
            label="비밀번호 확인"
            type="password"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "처리 중..." : "회원가입"}
          </Button>
        </form>
      </FormProvider>
    </section>
  );
}
