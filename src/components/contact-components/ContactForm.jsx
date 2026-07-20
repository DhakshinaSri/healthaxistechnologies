import { useState } from "react";
import Toast from "@/components/common-components/Toast";

export default function ContactUsForm() {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const inputClass =
    "w-full border border-gray-200 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#7096D1] bg-gray-100";

  const btnClass =
    "bg-black text-white px-8 py-3 rounded-md hover:bg-[#7096D1] transition shadow";

  const showToast = (type = "success") => {
    setToast({ show: true, message: "", type });

    setTimeout(() => {
      setToast({ show: false, message: "", type });
    }, 5000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);

    console.log({
      email,
      fullName,
      phone,
      message,
    });

    showToast("success");

    setEmail("");
    setFullName("");
    setPhone("");
    setMessage("");

    setLoading(false);
  };

  return (
    <div className="w-full">

      <div className="p-8 w-full">

        <form className="space-y-6" onSubmit={handleSubmit}>

  {/* Name */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Name *
    </label>
    <input
      type="text"
      className={inputClass}
      value={fullName}
      onChange={(e) => setFullName(e.target.value)}
      required
    />
  </div>

  {/* Mobile Number */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Mobile Number *
    </label>
    <input
      type="tel"
      className={inputClass}
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      required
    />
  </div>

  {/* Email */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Email Id *
    </label>
    <input
      type="email"
      className={inputClass}
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      required
    />
  </div>

  {/* Message */}
  <div>
    <label className="block text-sm font-medium text-gray-700 mb-2">
      Message *
    </label>
    <textarea
      className={inputClass}
      rows="5"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      required
    ></textarea>
  </div>

  <div className="flex justify-center pt-4">
    <button type="submit" className={btnClass} disabled={loading}>
      {loading ? "Submitting..." : "Submit"}
    </button>
  </div>

</form>

      </div>

      <Toast toast={toast} setToast={setToast} />

    </div>
  );
}