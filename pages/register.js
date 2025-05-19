export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-2xl mx-auto border border-gray-200 rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Register Your Security Company</h1>

        {/* SECTION 1: Company Info */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3">Business Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Company Name</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">PSIRA Number</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Company Email</label>
              <input type="email" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <input type="tel" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Province</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="e.g. Gauteng" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City or Town</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" />
            </div>
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-1">Full Physical Address (Main Branch)</label>
            <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="e.g. 123 Main Rd, Bellville, Cape Town" />
          </div>

          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">Do you operate in more than one city or province?</label>
            <div className="flex items-center gap-6 mb-3">
              <label><input type="radio" name="multiBranch" className="mr-2" /> Yes</label>
              <label><input type="radio" name="multiBranch" className="mr-2" /> No</label>
            </div>
            <label className="block text-sm mb-1">If yes, list your other branches (city or province):</label>
            <textarea className="w-full border border-gray-300 rounded p-2" rows="2" placeholder="e.g. Durban, Bloemfontein, Nelspruit" />
          </div>
        </div>

        {/* SECTION 2: Login Setup */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-3">Create Your Login</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input type="text" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input type="password" className="w-full border border-gray-300 rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Confirm Password</label>
              <input type="password" className="w-full border border-gray-300 rounded p-2" />
            </div>
          </div>
        </div>

        {/* SECTION 3: Consent */}
        <div className="mb-6">
          <label className="flex items-start">
            <input type="checkbox" className="mr-2 mt-1" required />
            <span className="text-sm">
              I confirm this is a legitimate security business and agree to the SecurSA Terms of Use.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button className="bg-[#00205B] text-white font-bold py-3 px-6 rounded hover:bg-[#001944]">
            Create My Account
          </button>
        </div>
      </div>
    </div>
  );
}
