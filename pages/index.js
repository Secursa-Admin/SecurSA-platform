
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#00205B] mb-6">About Us</h2>
          <p className="text-lg text-[#00205B] mb-4">
            <span className="text-[#84BD00] font-bold">SecurSA</span> is South Africa’s first security marketplace...
          </p>
        </div>
      </section>

      {/* HOMEPAGE BUTTONS */}
      <section className="py-16 px-6 bg-[#F8F9FA] border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-[#00205B] mb-6">Get a Quote</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/alarm"><button className="bg-[#84BD00] text-white py-2 px-4 rounded font-bold">Alarm Systems</button></Link>
            <Link href="/armed-response"><button className="bg-[#84BD00] text-white py-2 px-4 rounded font-bold">Armed Response</button></Link>
            <Link href="/guarding"><button className="bg-[#84BD00] text-white py-2 px-4 rounded font-bold">Guarding</button></Link>
            <Link href="/cctv"><button className="bg-[#84BD00] text-white py-2 px-4 rounded font-bold">CCTV</button></Link>
            <Link href="/offsite-monitoring"><button className="bg-[#84BD00] text-white py-2 px-4 rounded font-bold">Offsite CCTV Monitoring</button></Link>
            <Link href="/training-centre"><button className="bg-[#84BD00] text-white py-2 px-4 rounded font-bold">PSIRA Training</button></Link>
          </div>
        </div>
      </section>

      {/* CONTACT US FIXED TWO-COLUMN */}
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
                <h3 className="text-xl font-bold text-[#00205B] mb-2">Email Us</h3>
                <p className="text-[#00205B]"><strong>Support:</strong> support@secursa.co.za</p>
                <p className="text-[#00205B]"><strong>Training:</strong> training@secursa.co.za</p>
                <p className="text-[#00205B]"><strong>Providers:</strong> partners@secursa.co.za</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2">WhatsApp Support</h3>
                <a href="https://wa.me/27872505300" className="text-[#84BD00] underline font-semibold">
                  Message us on WhatsApp
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2">Ask Surelock</h3>
                <p className="text-[#00205B]">Click the “Ask Surelock” button on the homepage — she’ll guide you in under 2 minutes.</p>
              </div>
            </div>

            <form action="https://formsubmit.co/support@secursa.co.za" method="POST" className="bg-[#F9FAFB] p-6 rounded-xl shadow-lg space-y-4">
              <input type="hidden" name="_subject" value="New Contact Message from SecurSA Website" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />

              <div>
                <label className="block text-[#00205B] font-medium mb-1">Your Name</label>
                <input type="text" name="name" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#84BD00]" />
              </div>

              <div>
                <label className="block text-[#00205B] font-medium mb-1">Your Email</label>
                <input type="email" name="email" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#84BD00]" />
              </div>

              <div>
                <label className="block text-[#00205B] font-medium mb-1">Your Message</label>
                <textarea name="message" rows="5" required className="w-full p-3 border border-gray-300 rounded-md focus:ring-[#84BD00]"></textarea>
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
