import React from "react";

export default function ContactForm() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "05cfd3ff-06a6-46d0-b312-66ff3dfc68c3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="mt-30 max-w-2xl mx-auto px-4">
      <h2 className="text-3xl font-bold mt-10">Contact</h2>
      <form onSubmit={onSubmit}>
        <div><input className="input input-ghost bg-base-200 mt-3 rounded-md w-full py-6" placeholder="Your name" type="text" name="name" required/></div>
        <div><input className="input input-ghost bg-base-200 mt-3 rounded-md w-full py-6" placeholder="Your email" type="email" name="email" required/></div>
        <div><textarea className="textarea textarea-ghost bg-base-200 mt-3 w-full rounded-md resize-none pt-3 pb-20" maxLength={800} placeholder="Your message" name="message" required></textarea></div>
         <div><button className="btn btn-neutral mt-3 rounded-md" type="submit">Send message</button></div>

      </form>
      <span>{result}</span>

    </div>
  );
}