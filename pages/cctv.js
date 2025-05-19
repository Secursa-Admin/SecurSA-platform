export default function CCTVQuotePage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Get a CCTV Quote</h1>

        {/* SECTION 1: Type of CCTV System */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">What type of CCTV system do you need?</h2>
          <div className="flex flex-col gap-2">
            <label><input type="radio" name="cctvType" className="mr-2" /> Analog</label>
            <label><input type="radio" name="cctvType" className="mr-2" /> IP / Digital</label>
            <label><input type="radio" name="cctvType" className="mr-2" /> Hybrid</label>
            <label><input type="radio" name="cctvType" className="mr-2" /> Not sure</label>
          </div>
        </div>

        {/* SECTION 2: Camera Requirements */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">How many cameras do you need?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Indoor Cameras</label>
              <input type="number" min="0" className="w-full border border-gray-300 rounded p-2" placeholder="e.g. 4" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Outdoor Cameras</label>
              <input type="number" min="0" className="w-full border border-gray-300 rounded p-2" placeholder="e.g. 2" />
            </div>
          </div>
        </div>

        {/* SECTION 3: Additional Options */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Do you need any of the following?</h2>
          <div className="flex flex-col gap-2">
            <label><input type="checkbox" className="mr-2" /> Monitor/TV for viewing</label>
            <label><input type="checkbox" className="mr-2" /> Mobile viewing access (App)</label>
            <label><input type="checkbox" className="mr-2" /> Site visit before quoting</label>
          </div>
        </div>

        {/* SECTION 4: Location & Contact Info */}
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
