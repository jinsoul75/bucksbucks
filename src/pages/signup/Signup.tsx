import { z } from 'zod';
import Button from '../../components/common/button/Button';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import instance from '../../apis/interceptor';

const accountSchema = z
  .object({
    nickname: z.string().min(2, '최소 2자 이상 입력해주세요'),
    email: z.string().email('올바른 이메일 형식이 아닙니다'),
    password: z
      .string()
      .min(6, '최소 6자 이상 입력해주세요')
      .max(12, '최대 12자까지 가능합니다'),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다',
    path: ['passwordConfirm'],
  });

type Account = z.infer<typeof accountSchema>;

export default function Signup() {
  const [account, setAccount] = useState<Account>({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [touched, setTouched] = useState({
    nickname: false,
    email: false,
    password: false,
    passwordConfirm: false,
  });
  const [errors, setErrors] = useState<{
    nickname?: string;
    email?: string;
    password?: string;
    passwordConfirm?: string;
  }>({});

  const navigate = useNavigate();

  const { mutate: signup } = useMutation({
    mutationFn: (account: Account) => instance.post('/api/signup', account),
    onSuccess: () => {
      navigate('/');
    },
    onError: (error) => {
      alert(error.message);
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    setAccount({ ...account, [id]: value });
    setTouched({ ...touched, [id]: true });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = accountSchema.safeParse(account);

    if (result.success) {
      signup(account);
    } else {
      setTouched({
        nickname: true,
        email: true,
        password: true,
        passwordConfirm: true,
      });
    }
  };

  useEffect(() => {
    const result = accountSchema.safeParse(account);
    if (!result.success) {
      const newErrors = result.error.issues.reduce(
        (acc, issue) => ({
          ...acc,
          [issue.path[0]]: touched[issue.path[0] as keyof typeof touched]
            ? issue.message
            : undefined,
        }),
        {},
      );
      setErrors(newErrors);
    } else {
      setErrors({});
    }
  }, [account, touched]);

  return (
    <section className="w-full min-h-[calc(100vh-120px)] flex items-center justify-center">
      <form className="flex flex-col gap-4 w-64" onSubmit={handleSubmit}>
        <div className="flex flex-col">
          <label htmlFor="nickname">Nickname</label>
          <input type="text" id="nickname" onChange={handleChange} />
          {errors.nickname && <p className="text-red-500 text-sm">{errors.nickname}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={handleChange} />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={handleChange} />
          {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
        </div>
        <div className="flex flex-col">
          <label htmlFor="passwordConfirm">Password Confirm</label>
          <input type="password" id="passwordConfirm" onChange={handleChange} />
          {errors.passwordConfirm && (
            <p className="text-red-500 text-sm">{errors.passwordConfirm}</p>
          )}
        </div>
        <Button type="submit">Signup</Button>
      </form>
    </section>
  );
}
