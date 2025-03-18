import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema } from "./schema";
import { AuthFormValues } from "./types";
import { useCheckEmail, useSignup } from "@/apis/auth/hooks";
import { useState } from "react";

export function useSignupForm() {
  const [emailToCheck, setEmailToCheck] = useState<string>("");
  const [isEmailChecked, setIsEmailChecked] = useState<boolean>(false);
  const [signupData, setSignupData] = useState<AuthFormValues>({
    email: "",
    password: ""
  });

  const methods = useForm<AuthFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onChange"
  });

  const { data: isDuplicate, isLoading: isEmailCheckLoading } =
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

  const { mutate: signup } = useSignup(signupData);

  const handleSignup = (data: AuthFormValues) => {
    const requestData: AuthFormValues = {
      email: data.email,
      password: data.password
    };

    setSignupData(requestData);
    signup();
  };

  //   const handleEmailCheck = (email: string) => {
  //     if (!email) {
  //       alert("이메일을 입력해주세요.");
  //       return;
  //     }
  //     checkEmail(email);
  //   };

  //   const handleAuthCodeVerify = (authCode: string) => {
  //     if (!authCode) {
  //       alert("인증번호를 입력해주세요.");
  //       return;
  //     }
  //     verifyAuthCode(authCode);
  //   };

  //   const isLoading =
  //     isSignupLoading || isEmailCheckLoading || isAuthVerifyLoading;

  return {
    methods,
    isLoading: isEmailCheckLoading,
    handleEmailCheck,
    isDuplicate,
    handleSignup,
    isEmailChecked
    // handleEmailCheck,
    // handleAuthCodeVerify
  };
}
