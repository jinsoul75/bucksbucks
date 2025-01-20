import { useFormContext } from 'react-hook-form';
import BaseInput from './BaseInput';

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
}

export default function FormInput({ name, label, ...props }: FormInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      {label && <label htmlFor={name}>{label}</label>}
      <BaseInput {...register(name)} id={name} {...props} />
      {errors[name] && (
        <p className="text-red-500 text-sm">{errors[name]?.message as string}</p>
      )}
    </div>
  );
} 