import useModalStore from "@/store/useModalStore";
import Modal from "./Modal";

export default function ModalContainer() {
  const modals = useModalStore((state) => state.modals);

  return (
    <>
      {modals.map(({ id, component, props }) => (
        <Modal
          key={id}
          id={id}
          component={component}
          props={props as Record<string, unknown>}
        />
      ))}
    </>
  );
}
