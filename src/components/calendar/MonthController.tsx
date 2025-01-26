export default function MonthController({
  currentDate,
  prevMonth,
  nextMonth,
  thisMonth,
}: {
  currentDate: Date;
  prevMonth: () => void;
  nextMonth: () => void;
  thisMonth: () => void;
}) {
  return (
    <div className="flex justify-center items-center gap-4">
      <div className="flex justify-center items-center gap-4 border rounded-xl bg-white overflow-hidden">
        <button
          onClick={prevMonth}
          className="p-2  font-extrabold hover:bg-gray-100 transition-colors border-r"
        >
          &lt;
        </button>
        <h2 className="font-semibold">
          {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
        </h2>
        <button
          onClick={nextMonth}
          className="p-2 font-extrabold hover:bg-gray-100 transition-colors border-l"
        >
          &gt;
        </button>
      </div>

      <div className="border rounded-xl bg-white p-2">
        <button onClick={thisMonth}>이번 달</button>
      </div>
    </div>
  );
}
