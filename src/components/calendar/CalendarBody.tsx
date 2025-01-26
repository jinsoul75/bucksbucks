import { useState, useEffect } from 'react';
import MonthController from './MonthController';
import MonthlyTotal from './MonthlyTotal';
import Week from './Week';
import Month from './Month';
import { DayData } from './types';

const CalendarBody: React.FC = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [calendarDays, setCalendarDays] = useState<DayData[]>([]);

  const generateCalendarDays = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const prevMonthDays = firstDay.getDay();
    const prevMonth = new Date(year, month, 0);

    const days: DayData[] = [];

    for (let i = prevMonthDays - 1; i >= 0; i--) {
      days.push({
        date: new Date(year, month - 1, prevMonth.getDate() - i),
        income: 0,
        expense: 0,
        transactions: [],
      });
    }

    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({
        date: new Date(year, month, i),
        income: 0,
        expense: 0,
        transactions: [],
      });
    }

    // 마지막 날짜가 몇 주차에 있는지 계산
    const lastDayWeek = Math.ceil(days.length / 7);
    const totalDays = lastDayWeek === 6 ? 42 : 35;
    const remainingDays = totalDays - days.length;

    for (let i = 1; i <= remainingDays; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        income: 0,
        expense: 0,
        transactions: [],
      });
    }

    setCalendarDays(days);
  };

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const thisMonth = () => {
    setCurrentDate(new Date());
  };

  useEffect(() => {
    generateCalendarDays(currentDate);
  }, [currentDate]);

  return (
    <div className="w-full h-full max-w-4xl  mx-auto flex flex-col gap-4">
      <div>
        <MonthController
          currentDate={currentDate}
          prevMonth={prevMonth}
          nextMonth={nextMonth}
          thisMonth={thisMonth}
        />
      </div>

      <div className="flex flex-col grow">
        <MonthlyTotal />

        <Week />

        <Month calendarDays={calendarDays} currentDate={currentDate} />
      </div>
    </div>
  );
};

export default CalendarBody;
