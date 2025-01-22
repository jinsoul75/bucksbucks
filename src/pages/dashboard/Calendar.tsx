import MonthController from '@/components/calendar/MonthController';
import CalendarBody from '@/components/calendar/CalendarBody';
import IconButton from '@/components/common/button/IconButton';
import { ReactComponent as PlusIcon } from '@/assets/icons/plus.svg';
import { ReactComponent as MemoIcon } from '@/assets/icons/memo.svg';

export default function Calendar() {
  return (
    <section className="flex flex-col gap-4 flex-1">
      <MonthController />
      <CalendarBody />
      <IconButton icon={<PlusIcon />} />
      <IconButton icon={<MemoIcon />} />
    </section>
  );
}
