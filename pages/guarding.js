export default function GuardingQuotePage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Get a Guarding Quote</h1>

        {/* SECTION 1: Guarding Type */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Is this for temporary or permanent guarding?</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <label><input type="radio" name="guardingType" className="mr-2" /> Temporary</label>
            <label><input type="radio" name="guardingType" className="mr-2" /> Permanent</label>
          </div>
        </div>

        {/* SECTION 2: Grade Info */}
        <div className="mb-6 bg-[#F0F4F8] border-l-4 border-[#84BD00] p-4 rounded">
          <p className="text-sm mb-1"><strong>Need help choosing guard grades?</strong></p>
          <ul className="text-sm list-disc list-inside text-[#00205B]">
            <li><strong>Grade A:</strong> Site supervisor or high-risk roles</li>
            <li><strong>Grade B:</strong> Site access control, shift supervisor</li>
            <li><strong>Grade C:</strong> Basic guarding & patrol duties</li>
          </ul>
        </div>

        {/* SECTION 3: Shift Requirements */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">How many guards do you need per shift?</h2>
          <div className="grid grid-cols-4 gap-4 text-sm font-semibold mb-2">
            <div></div>
            <div>Grade A</div>
            <div>Grade B</div>
            <div>Grade C</div>
          </div>
          {["Day", "Night"].map((shift) => (
            <div key={shift} className="grid grid-cols-4 gap-4 mb-4">
              <div className="font-semibold">{shift} Shift</div>
              <input type="number" min="0" className="border border-gray-300 rounded p-2" placeholder="0" />
              <input type="number" min="0" className="border border-gray-300 rounded p-2" placeholder="0" />
              <input type="number" min="0" className="border border-gray-300 rounded p-2" placeholder="0" />
            </div>
          ))}
        </div>

        {/* SECTION 4: Armed or Unarmed */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Do you require any armed guards?</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <label><input type="radio" name="armedGuards" className="mr-2" /> Yes</label>
            <label><input type="radio" name="armedGuards" className="mr-2" /> No</label>
            <label><input type="radio" name="armedGuards" className="mr-2" /> Not sure yet</label>
          </div>
        </div>

        {/* SECTION 5: Site Info */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Site Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Number of Entrances</label>
              <input type="number" min="0" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Number of Buildings / Zones</label>
              <input type="number" min="0" className="w-full border border-gray-300 rounded p-2" />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-1">Special instructions or risk concerns</label>
            <textarea className="w-full border border-gray-300 rounded p-2" rows="4" placeholder="Optional..."></textarea>
          </div>
        </div>

        {/* SECTION 6: Contact Info */}
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
