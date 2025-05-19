export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start">
              <img src="/icon-envelope.svg" alt="Email Icon" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <p className="font-bold">Email Us</p>
                <p><strong>Support:</strong> support@secursa.co.za</p>
                <p><strong>Training:</strong> training@secursa.co.za</p>
                <p><strong>Providers:</strong> partners@secursa.co.za</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start">
              <img src="/icon-whatsapp.svg" alt="WhatsApp Icon" className="w-6 h-6 mt-1 mr-3" />
              <div>
                <p className="font-bold">WhatsApp Support</p>
                <a href="https://wa.me/0000000000" className="text-[#84BD00] underline">
                  Click here to message us on WhatsApp
                </a>
              </div>
            </div>

            {/* Ask Surelock */}
            <div className="flex items-start">
              <img src="/ask-surelock-icon.png" alt="Ask Surelock Icon" className="w-8 h-8 mr-3 rounded-full border border-[#00205B]" />
              <div>
                <p className="font-bold">Ask Surelock</p>
                <p className="italic text-sm">
                  Click the “Ask Surelock” button on the homepage — she’ll guide you in under 2 minutes.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6" action="#" method="POST">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#00205B]">Full Name</label>
                <input type="text" name="name" id="name" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#00205B]">Email Address</label>
                <input type="email" name="email" id="email" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#00205B]">Message</label>
              <textarea name="message" id="message" rows="4" required className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
            </div>
            <div>
              <button type="submit" className="bg-[#00205B] text-white font-bold py-2 px-6 rounded hover:bg-[#001944]">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
