import { create } from 'zustand';

// 모달 타입 정의
interface Modal<T = unknown> {
  id: string;
  component: React.ComponentType;
  props: T;
}

// 스토어 타입 정의
interface ModalStore {
  modals: Modal<unknown>[];
  openModal: <T>(id: string, component: React.ComponentType, props: T) => void;
  closeModal: (id: string) => void;
}

const useModalStore = create<ModalStore>((set) => ({
  modals: [],

  // 모달 추가
  openModal: <T>(id: string, component: React.ComponentType, props: T) =>
    set((state) => ({
      modals: [...state.modals, { id, component, props }],
    })),

  // 모달 제거
  closeModal: (id: string) =>
    set((state) => ({
      modals: state.modals.filter((modal) => modal.id !== id),
    })),
}));

export default useModalStore;
