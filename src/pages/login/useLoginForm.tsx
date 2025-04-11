import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schema";
import { LoginFormValues } from "./type";
import { useLogin } from "@/apis/auth/hooks";
import { useState } from "react";

export function useLoginForm() {
  const [loginData, setLoginData] = useState<LoginFormValues>({
    userId: "",
    userPwd: ""
  });

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit"
  });

  const { mutate: login } = useLogin(loginData);

  const handleLogin = (data: LoginFormValues) => {
    console.log("data", data);
    const requestData: LoginFormValues = {
      userId: data.userId,
      userPwd: data.userPwd,
      keepLogin: data.keepLogin
    };
    setLoginData(requestData);
    login();
  };

  return { methods, handleLogin };
}
