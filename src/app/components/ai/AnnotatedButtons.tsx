interface AnnotatedButtonsProps {
  onMark: () => void;
  onDelete: () => void;
}

export default function AnnotatedButtons({ onDelete }: AnnotatedButtonsProps) {
  return (
    <div className="p-4 bg-white shadow rounded-lg flex gap-2">
      <button
        className="p-2 bg-red-500 text-white rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-300"
        onClick={onDelete}
        aria-label="Delete selected annotations"
      >
        Delete Selected
      </button>
    </div>
  );
}
