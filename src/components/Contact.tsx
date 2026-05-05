import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="min-h-screen bg-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-600">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* LEFT SIDE - CONTACT INFO */}
          <div className="bg-gray-900 text-white p-10">
            <h2 className="text-2xl font-semibold mb-8">
              Get In Touch
            </h2>

            <div className="space-y-8">

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Full Address
                </h3>
                <p className="text-gray-300">
                  Tech Star Ltd <br />
                  123 Innovation Street <br />
                  London, SW19 8ZX <br />
                  United Kingdom
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Company Email
                </h3>
                <p className="text-gray-300">
                  support@techstar.com
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">
                  Phone
                </h3>
                <p className="text-gray-300">
                  +44 20 1234 5678
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE - FORM */}
          <div className="p-10">
            <h2 className="text-2xl font-semibold mb-8">
              Send a Message
            </h2>

            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Message sent!");
              }}
            >
              <div>
                <label className="block mb-2 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Your Message
                </label>
                <textarea
                  rows={6}
                  placeholder="Write your message..."
                  className="w-full p-3 border rounded-lg"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
    
  );
};

export default Contact;