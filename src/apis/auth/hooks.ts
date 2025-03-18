import { useMutation, useQuery } from "@tanstack/react-query";
import { authAPI } from "./authAPI";
import { AuthFormValues } from "@/pages/signup/types";

export function useCheckEmail(email: string) {
  return useQuery({
    queryKey: ["checkEmail", email],
    queryFn: () => authAPI.checkEmail(email),
    enabled: !!email
  });
}

export function useSendEmail(email: string) {
  return useQuery({
    queryKey: ["sendEmail", email],
    queryFn: () => authAPI.sendEmail(email),
  });
}

export function useVerifyCode(email: string, code: string) {
  return useQuery({
    queryKey: ["verifyCode", email, code],
    queryFn: () => authAPI.verifyCode(email, code),
  });
}

export function useSignup(data: AuthFormValues) {
  return useMutation({
    mutationFn: () => authAPI.signup(data),
  });
}

export function useLogin(data: AuthFormValues) {
  return useMutation({
    mutationFn: () => authAPI.login(data),
  });
}


