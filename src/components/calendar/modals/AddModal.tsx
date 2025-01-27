import FormInput from '@/components/common/input/FormInput';
import Modal from '@/components/common/modal/Modal';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { z } from 'zod';
import Button from '@/components/common/button/Button';

interface AddModalProps {
  onClose: () => void;
}

const addSchema = z.object({
  title: z.string().min(1, '제목은 필수 입력입니다.'),
  content: z.string().min(1, '내용은 필수 입력입니다.'),
  amount: z.number().min(1, '금액은 필수 입력입니다.'),
  date: z.string().min(1, '날짜는 필수 입력입니다.'),
});

type Add = z.infer<typeof addSchema>;

export default function AddModal({ onClose }: AddModalProps) {
  const [tabState, setTabState] = useState<'income' | 'expense'>('income');

  const methods = useForm<Add>({
    resolver: zodResolver(addSchema),
    mode: 'onChange',
  });

  const onSubmit = (data: Add) => {
    console.log(data);
  };

  return (
    <Modal onClose={onClose}>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[480px] space-y-4">
        <h2 className="text-xl font-bold">입력</h2>

        <div className="flex items-center gap-4">
          <button
            className={`px-4 border rounded  ${
              tabState === 'income'
                ? 'bg-white border-finance-income text-finance-income'
                : 'bg-slate-100 '
            }`}
            onClick={() => setTabState('income')}
          >
            수입
          </button>
          <button
            className={`px-4 border rounded ${
              tabState === 'expense'
                ? 'bg-white border-finance-expense text-finance-expense'
                : 'bg-slate-100 '
            }`}
            onClick={() => setTabState('expense')}
          >
            지출
          </button>
        </div>

        <FormProvider {...methods}>
          <form className="space-y-4" onSubmit={methods.handleSubmit(onSubmit)}>
            <FormInput name="date" label="날짜" type="date" />
            <FormInput name="title" label="자산" type="text" />
            <FormInput name="content" label="분류" type="text" />
            <FormInput name="amount" label="금액" type="number" />

            <div className="flex justify-end gap-2">
              <Button type="submit">저장</Button>
              <Button type="button" onClick={onClose}>
                닫기
              </Button>
            </div>
          </form>
        </FormProvider>
      </div>
    </Modal>
  );
}
