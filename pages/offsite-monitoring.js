export default function OffsiteCCTVMonitoringPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Offsite CCTV Monitoring Quote</h1>

        {/* SECTION 1: Monitoring Type */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">How would you like your CCTV monitored?</h2>
          <div className="flex flex-col gap-2">
            <label><input type="radio" name="monitoringType" className="mr-2" /> Live CCTV Feed (continuous or scheduled)</label>
            <label><input type="radio" name="monitoringType" className="mr-2" /> Camera-by-Exception (triggered by beams or electric fence)</label>
          </div>
        </div>

        {/* SECTION 2: Camera Count */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">How many cameras should be monitored?</h2>
          <input type="number" min="1" className="w-full border border-gray-300 rounded p-2" placeholder="e.g. 6" />
        </div>

        {/* SECTION 3: Internet Connection */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Is there internet available at the premises?</h2>
          <div className="flex flex-col md:flex-row gap-4">
            <label><input type="radio" name="internet" className="mr-2" /> Yes</label>
            <label><input type="radio" name="internet" className="mr-2" /> No</label>
            <label><input type="radio" name="internet" className="mr-2" /> Not sure</label>
          </div>
        </div>

        {/* SECTION 4: Response Option */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">How should we respond to events?</h2>
          <div className="flex flex-col gap-2">
            <label><input type="checkbox" className="mr-2" /> Call me immediately</label>
            <label><input type="checkbox" className="mr-2" /> Dispatch armed response</label>
            <label><input type="checkbox" className="mr-2" /> Both</label>
            <label><input type="checkbox" className="mr-2" /> Just record & notify after hours</label>
          </div>
        </div>

        {/* SECTION 5: Additional Notes */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Special instructions or areas of concern?</h2>
          <textarea className="w-full border border-gray-300 rounded p-2" rows="4" placeholder="Optional..."></textarea>
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
