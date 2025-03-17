import { useState } from "react";
import { DayData } from "./types";

export default function Month({
  calendarDays,
  currentDate
}: {
  calendarDays: DayData[];
  currentDate: Date;
}) {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  return (
    <div className="grid grid-cols-7 border border-gray-200 rounded-b-md overflow-hidden max-h-full grow">
      {calendarDays.map((day, index) => (
        <div
          key={index}
          onClick={() => setSelectedDate(day.date)}
          className={`
          bg-white p-2
          ${day.date.getMonth() !== currentDate.getMonth() ? "opacity-50" : ""}
          hover:bg-gray-100 transition-colors cursor-pointer
          ${
            selectedDate && day.date.getTime() === selectedDate.getTime()
              ? "border border-yellow-dark"
              : `${index % 7 === 0 ? "" : "border-l border-gray-200"} 
                ${index < 7 ? "" : "border-t  border-gray-200"} 
              `
          }
        `}
        >
          <div className="flex justify-between items-center mb-2">
            <span
              className={`
            text-sm font-medium inline-flex items-center justify-center
            ${
              day.date.getDate() === currentDate.getDate()
                ? "bg-yellow-600 text-white rounded-full w-6 h-6"
                : ""
            }
            ${day.date.getDay() === 0 ? "text-red-500" : ""}
            ${day.date.getDay() === 6 ? "text-blue-500" : ""}
          `}
            >
              {day.date.getDate()}
            </span>
          </div>
          {day.transactions.length > 0 && (
            <div className="space-y-1 text-sm">
              {day.income > 0 && (
                <div className="text-finance-income">
                  +{day.income.toLocaleString()}
                </div>
              )}
              {day.expense > 0 && (
                <div className="text-finance-expense">
                  -{day.expense.toLocaleString()}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
