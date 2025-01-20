import { forwardRef, type ForwardedRef } from 'react';

function BaseInput(
  props: React.InputHTMLAttributes<HTMLInputElement>,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      ref={ref}
      className="border border-gray-300 rounded-md px-3 py-2"
      {...props}
    />
  );
}

export default forwardRef(BaseInput);