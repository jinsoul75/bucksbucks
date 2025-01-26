export default function Week() {
  return (
    <div className="grid grid-cols-7 border-x border-gray-200">
      {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
        <div
          key={day}
          className={`text-center font-medium ${
            day === '일' ? 'text-red-500' : day === '토' ? 'text-blue-500' : ''
          }`}
        >
          {day}
        </div>
      ))}
    </div>
  );
}
