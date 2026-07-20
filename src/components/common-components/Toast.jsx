export default function Toast({ toast, setToast }) {
  if (!toast.show) return null;

  return (
    <div className="fixed top-26 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-xl">
      <div
        className={`flex items-start gap-3 rounded-lg px-4 py-3 shadow-md border
          ${
            toast.type === "success"
              ? "bg-[#5F963E] border-[#A2C88C]"
              : "bg-[#F87171] border-[#FCA5A5]"
          }
        `}
      >
        {/* Text */}
        <div className="flex-1 text-left">
          <p className="font-bold text-white">
            {toast.type === "success"
              ? "Submitted successfully!"
              : "Submission failed"}
          </p>
          <p className="text-sm text-white">
            {toast.type === "success"
              ? "Thanks for your message! We look forward to connecting with you soon."
              : "Something went wrong. Please try again later."}
          </p>
        </div>

        {/* Close Button */}
        <button
          onClick={() =>
            setToast({ show: false, message: "", type: toast.type })
          }
          className="text-white text-lg leading-none font-bold opacity-80 hover:opacity-100"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
