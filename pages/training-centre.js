export default function TrainingCentreBookingPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Book a PSIRA Training Course</h1>

        {/* SECTION 1: Course Selection */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Which training course do you want to book?</h2>
          <div className="flex flex-col gap-2">
            <label><input type="radio" name="course" className="mr-2" /> EDC (Entry Level Combo) - Includes Grade E, D & C</label>
            <label><input type="radio" name="course" className="mr-2" /> Grade E – Basic access control and observation</label>
            <label><input type="radio" name="course" className="mr-2" /> Grade D – Patrolling & record keeping</label>
            <label><input type="radio" name="course" className="mr-2" /> Grade C – Gate/guard house, working under supervision</label>
            <label><input type="radio" name="course" className="mr-2" /> Grade B – Shift control & supervision</label>
            <label><input type="radio" name="course" className="mr-2" /> Grade A – Management of security teams, high-risk sites</label>
          </div>
        </div>

        {/* SECTION 2: Personal Info */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Your Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Full Name</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">ID Number</label>
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
            <div>
              <label className="block text-sm font-medium mb-1">Province</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="e.g. Gauteng" />
            </div>
            <div className="flex items-center mt-6">
              <input type="checkbox" className="mr-2" />
              <span className="text-sm">Allow replies via WhatsApp</span>
            </div>
          </div>
        </div>

        {/* SECTION 3: Optional Preference */}
        <div className="mb-8">
          <h2 className="text-xl font-bold mb-3">Preferred Training Centre (Optional)</h2>
          <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="If known, type the name of your preferred training provider..." />
        </div>

        {/* SECTION 4: Consent */}
        <div className="mb-8">
          <label className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" required />
            <span className="text-sm">
              I confirm that I am applying for a registered security training course and agree to be contacted by a verified provider.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center mt-10">
          <button className="bg-[#00205B] text-white font-bold py-3 px-6 rounded hover:bg-[#001944]">
            Find Training Centres
          </button>
        </div>
      </div>
    </div>
  );
}
