export default function AlarmQuotePage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Get an Alarm Quote</h1>

        {/* SECTION 1: System Type */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">What type of alarm system do you need?</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <label><input type="radio" name="systemType" className="mr-2" /> Wired</label>
            <label><input type="radio" name="systemType" className="mr-2" /> Wireless</label>
            <label><input type="radio" name="systemType" className="mr-2" /> Hybrid</label>
            <label><input type="radio" name="systemType" className="mr-2" /> Not sure</label>
          </div>
        </div>

        {/* SECTION 2: Standard Components */}
        <div className="mb-8 bg-[#F0F4F8] p-4 rounded border-l-4 border-[#84BD00]">
          <p className="text-sm">
            <strong>All standard quotes include:</strong> Control panel, battery, transformer, keypad, and internal siren.
          </p>
        </div>

        {/* SECTION 3: Device Quantities */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">How many of each device do you need?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {["Indoor PIRs", "Outdoor PIRs", "Door Contacts", "Panic Buttons", "Remote Controls"].map((label, i) => (
              <div key={i}>
                <label className="block text-sm font-medium mb-1">{label}</label>
                <input type="number" min="0" className="w-full border border-gray-300 rounded p-2" placeholder="0" />
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 4: Armed Response */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Do you want this linked to Armed Response & Monitoring?</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <label><input type="radio" name="armedResponse" className="mr-2" /> Yes</label>
            <label><input type="radio" name="armedResponse" className="mr-2" /> No</label>
            <label><input type="radio" name="armedResponse" className="mr-2" /> Not sure</label>
          </div>
        </div>

        {/* SECTION 5: Budget */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">What is your budget?</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["Under R3,000", "R3,000 – R6,000", "R6,000 – R10,000", "R10,000+", "Not sure yet"].map((label, i) => (
              <label key={i} className="flex items-center">
                <input type="radio" name="budget" className="mr-2" /> {label}
              </label>
            ))}
          </div>
        </div>

        {/* SECTION 6: Address + Contact Info */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Where should the system be installed?</h2>
          <input type="text" className="w-full border border-gray-300 rounded p-2 mb-4" placeholder="Physical address or suburb" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input type="email" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div className="flex items-center mt-6">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Allow replies via WhatsApp</span>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-10">
          <button className="bg-[#00205B] text-white font-bold py-3 px-6 rounded hover:bg-[#001944]">
            Get My Quote
          </button>
        </div>
      </div>
    </div>
  );
}
