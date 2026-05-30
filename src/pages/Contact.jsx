import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/psikhar74@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            ...formData,
            _captcha: "false",
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      }
    } catch (error) {
      console.error(error);
      alert("Failed to send message.");
    }

    setIsSubmitting(false);
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-slate-950 text-white py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>

          <p className="text-slate-400 mt-4">
            Have a project idea or want to collaborate? Feel free to
            contact me.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Side */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold mb-8">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div>
                <p className="text-cyan-400 font-semibold">
                  Email
                </p>

                <a
                  href="mailto:psikhar74@gmail.com"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  contact@sikharpanthi.com.np
                </a>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Phone
                </p>

                <p className="text-slate-300">
                  +977 9867391430
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  Location
                </p>

                <p className="text-slate-300">
                  Rupandehi, Nepal
                </p>
              </div>

              <div>
                <p className="text-cyan-400 font-semibold">
                  GitHub
                </p>

                <a
                  href="https://github.com/sikharsp"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-300 hover:text-cyan-400"
                >
                  github.com/sikharsp
                </a>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
            {success ? (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">
                  Message Sent Successfully 🚀
                </h3>

                <p className="text-slate-300">
                  Thank you for contacting me. I'll get back to you soon.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 px-6 py-3 bg-cyan-500 rounded-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-4"
              >
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-cyan-500"
                />

                <input
                  id="email"
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-cyan-500"
                />

                <input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-cyan-500"
                />

                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none focus:border-cyan-500"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded-lg transition"
                >
                  {isSubmitting
                    ? "Sending..."
                    : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
