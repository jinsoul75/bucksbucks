import AddIcon from "@/assets/icons/add.svg?react";
import MemoIcon from "@/assets/icons/memo.svg?react";

import CalendarBody from "@/components/calendar/CalendarBody";
import IconButton from "@/components/common/button/IconButton";
import MemoModal from "@/components/calendar/modals/MemoModal";
import AddModal from "@/components/calendar/modals/AddModal";

import useModalStore from "@/store/useModalStore";

import { MODALS } from "@/constants/modal";

export default function Calendar() {
  const { openModal, closeModal } = useModalStore();

  return (
    <section className="flex flex-col gap-4 flex-1">
      <div className="relative flex-1">
        <CalendarBody />
        <IconButton
          onClick={() =>
            openModal(MODALS.ADD_MODAL, AddModal as React.ComponentType, {
              onClose: () => closeModal(MODALS.ADD_MODAL)
            })
          }
          icon={<AddIcon />}
          className="rounded-full bg-yellow-dark w-10 h-10 absolute right-48 text-white "
        />
        <IconButton
          onClick={() =>
            openModal(MODALS.MEMO_MODAL, MemoModal as React.ComponentType, {
              onClose: () => closeModal(MODALS.MEMO_MODAL)
            })
          }
          icon={<MemoIcon />}
          className="rounded-full bg-white border border-yellow-dark p-1 w-8 h-8 absolute right-60 text-yellow-dark"
        />
      </div>
    </section>
  );
}
