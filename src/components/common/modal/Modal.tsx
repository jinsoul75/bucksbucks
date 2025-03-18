import useModalStore from "@/store/useModalStore";
import { createPortal } from "react-dom";

interface ModalProps {
  id: string;
  component: React.ComponentType;
  props: Record<string, unknown>;
}

export default function Modal({ id, component: Component, props }: ModalProps) {
  const closeModal = useModalStore((state) => state.closeModal);

  return createPortal(
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => closeModal(id)}
      />
      <div className="relative z-10">{<Component {...props} />}</div>
    </div>,
    document.body
  );
}
