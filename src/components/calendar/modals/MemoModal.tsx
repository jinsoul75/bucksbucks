
interface MemoModalProps {
  onClose: () => void;
}

export default function MemoModal({ onClose }: MemoModalProps) {
  return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-6 w-[400px]">
        <h2 className="text-xl font-bold mb-4">메모</h2>

        {/* 모달 내용 */}
        <div className="space-y-4">
          <textarea
            placeholder="메모를 입력하세요"
            className="w-full border p-2 rounded h-40"
          />
          <div className="flex justify-end gap-2">
            <button onClick={onClose} className="px-4 py-2 border rounded">
              닫기
            </button>
            <button className="px-4 py-2 bg-yellow-dark text-white rounded">저장</button>
          </div>
        </div>
      </div>
  );
}
