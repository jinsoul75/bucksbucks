import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { AuthFormValues } from "./types";
import { useSignupForm } from "./useSignupForm";

import Button from "@/components/common/button/Button";
import FormInput from "@/components/common/input/FormInput";
import Loading from "@/components/common/loading/Loading";

export default function Signup() {
  const navigate = useNavigate();

  const {
    handleEmailCheck,
    handleEmailSend,
    handleSignup,
    handleAuthCodeVerify,
    isEmailChecked,
    //isEmailValid,
    methods,
    duplicateResult,
    isSubmitting,
    isVerifiedCode,
    isEmailCheckLoading,
    isEmailSendLoading,
    isAuthCodeVerifyLoading
  } = useSignupForm();

  const onSubmit = (data: AuthFormValues) => {
    handleSignup(data);
    navigate("/login");
  };

  return (
    <section className="w-full min-h-[calc(100vh-120px)] flex flex-col items-center justify-center">
      <Button onClick={() => navigate("/")} type="button">
        메인으로 돌아가기
      </Button>
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

          {isEmailCheckLoading ? (
            <Loading />
          ) : !isEmailChecked || duplicateResult?.resultData ? (
            <Button
              className="text-sm"
              onClick={handleEmailCheck}
              type="button"
            >
              중복체크
            </Button>
          ) : null}

          {isEmailSendLoading ? (
            <Loading />
          ) : duplicateResult?.resultData ? null : (
            <Button className="text-sm" onClick={handleEmailSend} type="button">
              인증번호 전송
            </Button>
          )}

          <FormInput name="authCode" label="인증번호" type="text" />

          {isAuthCodeVerifyLoading ? (
            <Loading />
          ) : (
            <Button
              className="text-sm"
              onClick={handleAuthCodeVerify}
              type="button"
            >
              인증확인
            </Button>
          )}

          {isVerifiedCode !== undefined ? (
            isVerifiedCode ? (
              <p className="text-blue-500 text-sm">
                인증번호가 확인되었습니다.
              </p>
            ) : (
              <p className="text-red-500 text-sm">
                인증번호가 일치하지 않습니다.
              </p>
            )
          ) : null}

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
