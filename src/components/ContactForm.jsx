import React from "react";
import { useState } from "react";

export default function ContactForm() {
  const [result, setResult] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid = formData.name && formData.email && formData.message;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "05cfd3ff-06a6-46d0-b312-66ff3dfc68c3");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Your message has been sent!");
        setFormData({ name: "", email: "", message: "" });
        event.target.reset();
        setTimeout(() => setResult(""), 5000);
      } else {
        setResult(data.message);
      }
    } catch (error) {
      setResult("Something went wrong");
      setTimeout(() => setResult(""), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-30 max-w-2xl mx-auto px-4">
      <h2 className="text-3xl font-bold mb-5">Contact</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            className="input input-ghost bg-base-200 w-full py-6 shadow-lg shadow-primary/20
           rounded-2xl hover:scale-105 transition-transform duration-300 ease-out"
            placeholder="Your name"
            type="text"
            name="name"
            value={formData.name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <input
            className="input input-ghost bg-base-200 mt-5 w-full py-6 shadow-lg shadow-primary/20
           rounded-2xl hover:scale-105 transition-transform duration-300 ease-out"
            placeholder="Your email"
            type="email"
            name="email"
            value={formData.email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <textarea
            className="textarea textarea-ghost bg-base-200 mt-5 w-full  resize-none pt-3 pb-20 shadow-lg shadow-primary/20
           rounded-2xl hover:scale-105 transition-transform duration-300 ease-out"
            maxLength={800}
            placeholder="Your message"
            name="message"
            value={formData.message}
            onChange={onChange}
            required
          ></textarea>
        </div>
        <div>
          <button
            className="btn btn-neutral mt-3 shadow-lg shadow-primary/20
           rounded-2xl hover:scale-105 transition-transform duration-300 ease-out"
            type="submit"
            disabled={!isFormValid || isSubmitting}
          >
            Send message
          </button>
        </div>
      </form>
     {result &&( <div className="mt-4 p-4 rounded-xl bg-gray-800 font-medium transition-all duration-500">
        {result}
      </div>)}
    </div>
  );
}
