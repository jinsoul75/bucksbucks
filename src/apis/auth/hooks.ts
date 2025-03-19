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
  return useMutation({
    mutationFn: () => authAPI.sendEmail(email),
  });
}

export function useVerifyCode(email: string, code: string) {
  return useMutation({
    mutationFn: () => authAPI.verifyCode(email, code),
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


