interface AlertModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export default function AlertModal({ onConfirm, onCancel }: AlertModalProps) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <p className="mb-4">Are you sure you want to save this annotation?</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
            onClick={onConfirm}
          >
            Save
          </button>
          <button
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
            onClick={onCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
