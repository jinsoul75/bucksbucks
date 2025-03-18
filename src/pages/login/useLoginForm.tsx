import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./schema";
import { LoginFormValues } from "./type";
import { useLogin } from "@/apis/auth/hooks";
import { useState } from "react";

export function useLoginForm() {
  const [loginData, setLoginData] = useState<LoginFormValues>({
    email: "",
    password: ""
  });

  const methods = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    mode: "onSubmit"
  });

  const { mutate: login } = useLogin(loginData);

  const handleLogin = (data: LoginFormValues) => {
    const requestData: LoginFormValues = {
      email: data.email,
      password: data.password
    };
    setLoginData(requestData);
    login();
  };

  return { methods, handleLogin };
}
