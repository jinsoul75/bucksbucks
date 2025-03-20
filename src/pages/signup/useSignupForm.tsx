import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema } from "./schema";
import { AuthFormValues, SignupFormValues } from "./types";
import {
  useCheckEmail,
  useSendEmail,
  useSignup,
  useVerifyCode
} from "@/apis/auth/hooks";
import { useEffect, useState } from "react";

export function useSignupForm() {
  const [emailToCheck, setEmailToCheck] = useState<string>("");
  const [emailToSend, setEmailToSend] = useState<string>("");
  const [authCode, setAuthCode] = useState<string>("");
  const [isEmailChecked, setIsEmailChecked] = useState<boolean | null>(null);
  const [signupData, setSignupData] = useState<AuthFormValues>({
    email: "",
    password: ""
  });

  const methods = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onChange"
  });

  const watchedEmail = methods.watch("email");

  const { errors } = methods.formState;
  const isEmailValid = !errors.email;

  useEffect(() => {
    if (isEmailChecked && watchedEmail !== emailToCheck) {
      setIsEmailChecked(false);
    }
  }, [watchedEmail, isEmailChecked, emailToCheck]);

  const { data: duplicateResult, isLoading: isEmailCheckLoading } =
    useCheckEmail(emailToCheck);

  const handleEmailCheck = () => {
    const email = methods.getValues("email");
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    setEmailToCheck(email);
    setIsEmailChecked(true);
  };

  const { mutate: sendEmail, isPending: isEmailSendLoading } =
    useSendEmail(emailToSend);

  const handleEmailSend = () => {
    const email = methods.getValues("email");
    if (!email) {
      alert("이메일을 입력해주세요.");
      return;
    }
    setEmailToSend(email);
    sendEmail();
  };

  const { mutate: verifyCode, data: isVerifiedCode, isPending: isAuthCodeVerifyLoading } = useVerifyCode(
    emailToSend,
    authCode
  );

  const handleAuthCodeVerify = () => {
    const authCode = methods.getValues("authCode");
    if (!authCode) {
      alert("인증번호를 입력해주세요.");
      return;
    }
    setAuthCode(authCode);
    verifyCode();
  };

  const { mutate: signup, isPending: isSubmitting } = useSignup(signupData);

  const handleSignup = (data: AuthFormValues) => {
    const requestData: AuthFormValues = {
      email: data.email,
      password: data.password
    };

    setSignupData(requestData);
    signup();
  };

  return {
    handleEmailCheck,
    handleSignup,
    handleEmailSend,
    handleAuthCodeVerify,
    methods,
    duplicateResult,
    isEmailChecked,
    isVerifiedCode,
    isSubmitting,
    isEmailCheckLoading,
    isEmailSendLoading,
    isAuthCodeVerifyLoading,
    isEmailValid
  };
}
