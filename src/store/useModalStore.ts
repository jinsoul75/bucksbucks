import { create } from 'zustand';

interface ModalState {
  isAddModalOpen: boolean;
  isMemoModalOpen: boolean;
  openAddModal: () => void;
  closeAddModal: () => void;
  openMemoModal: () => void;
  closeMemoModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
  isAddModalOpen: false,
  isMemoModalOpen: false,
  openAddModal: () => set({ isAddModalOpen: true }),
  closeAddModal: () => set({ isAddModalOpen: false }),
  openMemoModal: () => set({ isMemoModalOpen: true }),
  closeMemoModal: () => set({ isMemoModalOpen: false }),
}));
