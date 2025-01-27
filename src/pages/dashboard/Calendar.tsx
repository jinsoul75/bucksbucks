import { useModalStore } from '@/store/useModalStore';

import CalendarBody from '@/components/calendar/CalendarBody';
import IconButton from '@/components/common/button/IconButton';
import AddIcon from '@/assets/icons/add.svg?react';
import MemoIcon from '@/assets/icons/memo.svg?react';
import MemoModal from '@/components/calendar/modals/MemoModal';
import AddModal from '@/components/calendar/modals/AddModal';

export default function Calendar() {
  const {
    openAddModal,
    openMemoModal,
    closeAddModal,
    closeMemoModal,
    isAddModalOpen,
    isMemoModalOpen,
  } = useModalStore();

  return (
    <section className="flex flex-col gap-4 flex-1">
      <div className="relative flex-1">
        <CalendarBody />
        <IconButton
          onClick={openAddModal}
          icon={<AddIcon />}
          className="rounded-full bg-yellow-dark w-10 h-10 absolute right-48 text-white "
        />
        <IconButton
          onClick={openMemoModal}
          icon={<MemoIcon />}
          className="rounded-full bg-white border border-yellow-dark p-1 w-8 h-8 absolute right-60 text-yellow-dark"
        />
        {isAddModalOpen && <AddModal onClose={closeAddModal} />}
        {isMemoModalOpen && <MemoModal onClose={closeMemoModal} />}
      </div>
    </section>
  );
}
