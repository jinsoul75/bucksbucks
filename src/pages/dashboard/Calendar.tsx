import MonthController from '@/components/calendar/MonthController';
import CalendarBody from '@/components/calendar/CalendarBody';
import IconButton from '@/components/common/button/IconButton';
import AddIcon from '@/assets/icons/add.svg?react';
import MemoIcon from '@/assets/icons/memo.svg?react';

export default function Calendar() {
  return (
    <section className="flex flex-col gap-4 flex-1">
      <MonthController />
      <CalendarBody />
      <IconButton icon={<AddIcon />} className="w-6 h-6" />
      <IconButton icon={<MemoIcon />} className="w-6 h-6" />
    </section>
  );
}
