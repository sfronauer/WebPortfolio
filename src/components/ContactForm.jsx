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
    <div>
      <div>Contact</div>
      <form onSubmit={onSubmit}>
        <div><input className="input" type="text" name="name" required/></div>
        <div><input className="input" type="email" name="email" required/></div>
        <div><textarea className="textarea" name="message" required></textarea></div>

         <div><button className="btn btn-neutral" type="submit">Submit Form</button></div>

      </form>
      <span>{result}</span>

    </div>
  );
}