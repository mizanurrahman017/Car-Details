import React, { useRef } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      "service_bkeenz7",     // EmailJS service ID
      "template_p5pyv1g",     // EmailJS template ID
      form.current,
      "KAvlHYTIieG35i_cq"    // EmailJS public key
    )
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch(() => {
      alert("Failed to send message");
    });

    e.target.reset();
  };

  return (
    <div className="bg-gray-100 py-16 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-3">Contact Us</h1>
          <p className="text-gray-600">
            Have questions about cars or our services? Get in touch with us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="bg-white p-8 rounded-xl shadow-md space-y-6">

            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-red-500 text-xl" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+880 1869438544</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-red-500 text-xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">support@carinfo.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-red-500 text-xl" />
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-gray-600">Sylhet, Bangladesh</p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow-md">
            <form ref={form} onSubmit={sendEmail} className="space-y-5">

              <div>
                <label className="block mb-1 font-medium">Name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              <div>
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Write your message..."
                  required
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Send Message
              </button>

            </form>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;