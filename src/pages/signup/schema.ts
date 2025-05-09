import { z } from "zod";

export const signupSchema = z
  .object({
    email: z
      .string()
      .nonempty("이메일을 입력해주세요")
      .email("올바른 이메일 형식이 아닙니다"),
    authCode: z.string().nonempty("인증번호를 입력해주세요"),
    password: z
      .string()
      .nonempty("비밀번호를 입력해주세요")
      .min(6, "최소 6자 이상 입력해주세요")
      .max(12, "최대 12자까지 가능합니다"),
    passwordConfirm: z.string().nonempty("비밀번호 확인을 입력해주세요")
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["passwordConfirm"]
  });
