export default function ArmedResponseQuotePage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Get an Armed Response Quote</h1>

        {/* SECTION 1: Type of Service */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">What type of service do you need?</h2>
          <div className="flex flex-col gap-2">
            <label><input type="checkbox" className="mr-2" /> Armed Response Only</label>
            <label><input type="checkbox" className="mr-2" /> Alarm Monitoring + Armed Response</label>
            <label><input type="checkbox" className="mr-2" /> Patrol Services</label>
          </div>
        </div>

        {/* SECTION 2: Alarm System Setup */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Alarm System</h2>
          <label className="block mb-2">Do you currently have an alarm system?</label>
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <label><input type="radio" name="hasAlarm" className="mr-2" /> Yes</label>
            <label><input type="radio" name="hasAlarm" className="mr-2" /> No</label>
            <label><input type="radio" name="hasAlarm" className="mr-2" /> Not sure</label>
          </div>

          <label className="block mb-2">Is the alarm linked to a control room?</label>
          <div className="flex flex-col md:flex-row gap-4">
            <label><input type="radio" name="isLinked" className="mr-2" /> Yes</label>
            <label><input type="radio" name="isLinked" className="mr-2" /> No</label>
            <label><input type="radio" name="isLinked" className="mr-2" /> Not sure</label>
          </div>
        </div>

        {/* SECTION 3: Premises Details */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Site Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Number of Premises/Buildings</label>
              <input type="number" min="1" className="w-full border border-gray-300 rounded p-2" placeholder="e.g. 3" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Number of Alarm Systems to be Linked</label>
              <input type="number" min="1" className="w-full border border-gray-300 rounded p-2" placeholder="e.g. 2" />
            </div>
          </div>
        </div>

        {/* SECTION 4: Location + Contact */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Location & Contact Info</h2>
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
