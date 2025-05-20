import React from "react";
import Image from "next/image";

const PadlockIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 text-[#84BD00] mr-3 flex-shrink-0"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
  </svg>
);

export default function Home() {
  return (
    <main className="bg-white">
      {/* HEADER */}
      <header className="bg-white px-6 shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center h-[90px]">
          <div className="flex items-center h-full">
            <Image src="/logo.png" alt="SecurSA Logo" height={70} width={240} />
          </div>
          <nav className="flex items-center space-x-10 text-[#00205B] font-semibold text-base">
            <a href="#about" className="hover:underline">About Us</a>
            <a href="#contact" className="hover:underline">Contact Us</a>
            <a href="#" className="hover:underline">Login</a>
            <a href="#" className="hover:underline">Ask Surelock</a>
          </nav>
        </div>
      </header>

      {/* HERO + BUTTONS + MASCOT */}
      <section className="bg-[#f9fafc] py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 text-[#00205B] text-center md:text-left max-w-5xl mx-auto">
            Security quotes on alarms, reaction, and guarding — quick and easy.
          </h1>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <p className="text-lg mb-6 text-[#00205B]">
                Whether it's your home, your business, or your granny's spaza shop — we’ll connect you to trusted, <span className="text-[#84BD00] font-semibold uppercase">PSIRA registered security companies</span> in less time than it takes to pour a Brannas & Coke — or crack open a Black Label.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-4">
                {["Alarm Systems", "Armed Response", "Guarding"].map((label, i) => (
                  <button key={i} className="bg-[#00205B] text-white py-3 px-4 rounded shadow-md">
                    {label}
                  </button>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-4">
                {["CCTV", "Off-Site Monitoring"].map((label, i) => (
                  <button key={i} className="bg-[#00205B] text-white py-3 px-4 rounded shadow-md">
                    {label}
                  </button>
                ))}
                <button className="bg-[#84BD00] text-white py-3 px-4 rounded shadow-md">
                  Training Centre
                </button>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image src="/surelock-mascot.png" alt="Surelock Mascot" width={360} height={360} className="object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY USE SECURSA SECTION */}
      <section id="about" className="py-16 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold mb-8 text-center text-[#00205B]">Why Use SecurSA?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            {[
              ["No shady operators allowed.", "We only list PSIRA-registered pros. No cowboys, no chancers."],
              ["No pushy sales calls. Ever.", "You're in control — you pick who contacts you."],
              ["No spam, no nonsense.", "Your details are protected tighter than a vault at SecurBank."],
              ["It’s 100% free for consumers.", "Quotes, connections, comparisons — no fees, no tricks."],
              ["Only verified, vetted providers.", "Like a bouncer at the digital door. No ID? No entry."],
              ["Quotes in under 2 minutes.", "Faster than boiling your kettle — even on load shedding backup 🔌😅"],
              ["Locally matched, nationwide reach.", "From Cape Town to Kuruman — we’ll find you the right fit."],
              ["No obligation. No contracts.", "Browse, compare, walk away. We won’t sulk."],
              ["Built for South Africans, by South Africans.", "We get the risks. We’ve lived them. And we built a solution that works."],
              ["Ask Surelock", "Your clever digital assistant. She’ll guide you to safer options."]
            ].map(([title, description], i) => (
              <div key={i} className="flex items-start">
                <PadlockIcon />
                <div>
                  <h3 className="text-lg font-bold text-[#00205B]">{title}</h3>
                  <p className="italic text-[#00205B]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT US */}
      <section id="contact" className="bg-white py-16 px-6 border-t border-gray-200">
        <div className="max-w-6xl mx-auto text-[#00205B]">
          <h2 className="text-3xl font-bold mb-8 text-center">Contact Us</h2>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <img src="/icon-envelope.svg" alt="Email Icon" className="w-6 h-6 mr-2" />
                  Email Us
                </h3>
                <p><strong>Support:</strong> support@secursa.co.za</p>
                <p><strong>Training:</strong> training@secursa.co.za</p>
                <p><strong>Providers:</strong> partners@secursa.co.za</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <img src="/icon-whatsapp.svg" alt="WhatsApp Icon" className="w-6 h-6 mr-2" />
                  WhatsApp Support
                </h3>
                <a href="https://wa.me/27872505300" className="text-[#84BD00] underline font-semibold">
                  Click here to message us on WhatsApp
                </a>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2 flex items-center">
                  <img src="/ask-surelock-icon.png" alt="Ask Surelock Icon" className="w-8 h-8 mr-2 rounded-full border border-[#00205B]" />
                  Ask Surelock
                </h3>
                <p className="italic text-sm">
                  Click the “Ask Surelock” button on the homepage — she’ll guide you in under 2 minutes.
                </p>
              </div>
            </div>
            <form className="space-y-6" action="#" method="POST">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium">Full Name</label>
                  <input type="text" name="name" required className="w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium">Email Address</label>
                  <input type="email" name="email" required className="w-full border border-gray-300 rounded-md shadow-sm p-2" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea name="message" rows="4" required className="w-full border border-gray-300 rounded-md shadow-sm p-2"></textarea>
              </div>
              <button type="submit" className="bg-[#00205B] text-white font-bold py-2 px-6 rounded hover:bg-[#001944]">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">&copy; 2023 SecurSA. All rights reserved.</p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#00205B]">Privacy Policy</a>
            <a href="#" className="text-gray-600 hover:text-[#00205B]">Terms of Service</a>
            <a href="#" className="text-gray-600 hover:text-[#00205B]">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
