import Modal from '@/components/common/modal/Modal';

interface DailyListModalProps {
  onClose: () => void;
}

export default function DailyListModal({ onClose }: DailyListModalProps) {
  return (
    <Modal onClose={onClose}>
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[480px]">
        <h2 className="text-xl font-bold mb-4">일정 추가</h2>

        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
    </Modal>
  );
}
