export default function HomePage() {
  return (
    <main>
      {/* Other sections like Hero, About Us, etc. */}

      {/* 🔽 CONTACT US SECTION */}
      <section id="contact" className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00205B] text-center mb-8">
            Contact Us
          </h2>

          <p className="text-center text-[#00205B] mb-12">
            No call centres. No fuss. Just reach out via email, WhatsApp, or the form below — and Surelock will take it from there.
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2 flex items-center">
                  <svg className="w-6 h-6 text-[#84BD00] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v9a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </h3>
                <p className="text-[#00205B]"><strong>Support:</strong> support@secursa.co.za</p>
                <p className="text-[#00205B]"><strong>Training:</strong> training@secursa.co.za</p>
                <p className="text-[#00205B]"><strong>Providers:</strong> partners@secursa.co.za</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2 flex items-center">
                  <svg className="w-6 h-6 text-[#84BD00] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5h2l3 7v5h8v-5l3-7h2" />
                  </svg>
                  WhatsApp Support
                </h3>
                <a href="https://wa.me/27872505300" target="_blank" rel="noopener noreferrer" className="text-[#84BD00] underline font-semibold">
                  Click here to message us on WhatsApp
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2 flex items-center">
                  <svg className="w-6 h-6 text-[#84BD00] mr-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Ask Surelock
                </h3>
                <p className="text-[#00205B]">Click the “Ask Surelock” button on the homepage — she’ll guide you in under 2 minutes.</p>
              </div>
            </div>
            <form action="https://formsubmit.co/support@secursa.co.za" method="POST" className="bg-[#F9FAFB] p-6 rounded-xl shadow-lg space-y-4">
              <input type="hidden" name="_subject" value="New Contact Message from SecurSA Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
              <div>
                <label className="block text-[#00205B] font-medium mb-1">Your Name</label>
                <input type="text" name="name" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84BD00]" />
              </div>
              <div>
                <label className="block text-[#00205B] font-medium mb-1">Your Email</label>
                <input type="email" name="email" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84BD00]" />
              </div>
              <div>
                <label className="block text-[#00205B] font-medium mb-1">Your Message</label>
                <textarea name="message" rows="5" required className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#84BD00]"></textarea>
              </div>
              <button type="submit" className="w-full bg-[#84BD00] text-white font-bold py-3 rounded-md hover:bg-[#76a900] transition duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
