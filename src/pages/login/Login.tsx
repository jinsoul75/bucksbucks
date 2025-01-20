import { z } from 'zod';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import instance from '../../apis/interceptor';

import naver from '@/assets/images/naver.webp';
import kakao from '@/assets/images/kakao.webp';
import google from '@/assets/images/google.webp';

import Image from '../../components/image/Image';
import Button from '../../components/common/button/Button';
import FormInput from '../../components/common/input/FormInput';

const accountSchema = z.object({
  email: z
    .string()
    .nonempty('이메일을 입력해주세요')
    .email('올바른 이메일 형식이 아닙니다'),
  password: z
    .string()
    .nonempty('비밀번호를 입력해주세요')
    .min(6, '최소 6자 이상 입력해주세요')
    .max(12, '최대 12자까지 가능합니다'),
});

type Account = z.infer<typeof accountSchema>;

export default function Login() {
  const navigate = useNavigate();

  const methods = useForm<Account>({
    resolver: zodResolver(accountSchema),
    mode: 'onSubmit',
  });

  const { mutate: signin } = useMutation({
    mutationFn: (account: Account) => instance.post('/api/signin', account),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const onSubmit = (data: Account) => {
    signin(data);
  };
  return (
    <section className="w-full min-h-[calc(100vh-120px)] flex flex-col gap-5 items-center justify-center">
      <FormProvider {...methods}>
        <form
          className="flex flex-col gap-4 w-64"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <FormInput name="email" label="Email" type="email" />
          <FormInput name="password" label="Password" type="password" />

          <Button type="submit">Sign In</Button>
        </form>
      </FormProvider>

      <div>또는</div>

      <div className="flex gap-5">
        <Image src={kakao} alt="kakao" className="w-10 h-10 hover:cursor-pointer" />
        <Image src={google} alt="google" className="w-10 h-10 hover:cursor-pointer" />
        <Image src={naver} alt="naver" className="w-10 h-10 hover:cursor-pointer" />
      </div>
    </section>
  );
}
