import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/common/button/Button";
import FormInput from "../../components/common/input/FormInput";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import instance from "../../apis/interceptor";

const accountSchema = z
  .object({
    nickname: z
      .string()
      .nonempty("닉네임을 입력해주세요")
      .min(2, "최소 2자 이상 입력해주세요"),
    email: z
      .string()
      .nonempty("이메일을 입력해주세요")
      .email("올바른 이메일 형식이 아닙니다"),
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

type Account = z.infer<typeof accountSchema>;

export default function Signup() {
  const navigate = useNavigate();

  const methods = useForm<Account>({
    resolver: zodResolver(accountSchema),
    mode: "onChange"
  });

  const { mutate: signup } = useMutation({
    mutationFn: (account: Account) => instance.post("/api/signup", account),
    onSuccess: () => {
      navigate("/");
    },
    onError: (error) => {
      alert(error.message);
    }
  });

  const onSubmit = (data: Account) => {
    signup(data);
  };

  return (
    <section className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4 w-64"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormInput name="nickname" label="Nickname" type="text" />
          <FormInput name="email" label="Email" type="email" />
          <FormInput name="password" label="Password" type="password" />
          <FormInput
            name="passwordConfirm"
            label="Password Confirm"
            type="passwordConfirm"
          />
          <Button type="submit">Signup</Button>
        </form>
      </FormProvider>
    </section>
  );
}
