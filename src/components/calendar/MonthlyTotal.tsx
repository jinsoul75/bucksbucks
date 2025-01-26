export default function MonthlyTotal() {
  return (
    <div className="flex justify-around items-center border rounded-t-md p-2">
      <Box title="수입" value="10" amount="100,000원" className="text-finance-income" />

      <Box title="지출" value="10" amount="100,000원" className="text-finance-expense" />

      <Box title="합계" value="20" amount="100,000원" />
    </div>
  );
}

const Box = ({
  title,
  value,
  amount,
  className,
}: {
  title: string;
  value: string;
  amount: string;
  className?: string;
}) => {
  return (
    <div className={'flex flex-col items-center'}>
      <div className="text-xs">
        {title}({value})
      </div>
      <div className={className}>{amount}</div>
    </div>
  );
};
