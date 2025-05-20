
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="bg-white py-16 px-6 border-b border-gray-200 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#00205B] mb-6">
            Security quotes on alarms, reaction, and guarding — quick and easy.
          </h1>
          <p className="text-xl text-[#00205B]">
            From spaza shops to smart homes — in under 2 minutes, we’ll show you the average armed response cost is R450/month.
          </p>
        </div>
      </section>

      {/* BUTTON SECTION */}
      <section className="py-12 px-6 bg-[#F8F9FA] text-center">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link href="/alarm"><button className="bg-[#84BD00] text-white py-3 px-4 rounded font-bold w-full">Alarm Systems</button></Link>
            <Link href="/armed-response"><button className="bg-[#84BD00] text-white py-3 px-4 rounded font-bold w-full">Armed Response</button></Link>
            <Link href="/guarding"><button className="bg-[#84BD00] text-white py-3 px-4 rounded font-bold w-full">Guarding</button></Link>
            <Link href="/cctv"><button className="bg-[#84BD00] text-white py-3 px-4 rounded font-bold w-full">CCTV</button></Link>
            <Link href="/offsite-monitoring"><button className="bg-[#84BD00] text-white py-3 px-4 rounded font-bold w-full">Offsite CCTV Monitoring</button></Link>
            <Link href="/training-centre"><button className="bg-[#84BD00] text-white py-3 px-4 rounded font-bold w-full">PSIRA Training</button></Link>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#00205B] mb-6">About Us</h2>
          <p className="text-lg text-[#00205B] mb-4">
            <span className="text-[#84BD00] font-bold">SecurSA</span> is South Africa’s first security marketplace...
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#00205B] text-center mb-8">Contact Us</h2>
          <p className="text-center text-[#00205B] mb-12">
            No call centres. No fuss. Just reach out via email, WhatsApp, or the form below — and Surelock will take it from there.
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2">📧 Email Us</h3>
                <p><strong>Support:</strong> support@secursa.co.za</p>
                <p><strong>Training:</strong> training@secursa.co.za</p>
                <p><strong>Providers:</strong> partners@secursa.co.za</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2">💬 WhatsApp Support</h3>
                <a href="https://wa.me/27872505300" className="text-[#84BD00] underline font-semibold">Message us on WhatsApp</a>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#00205B] mb-2">🔐 Ask Surelock</h3>
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
