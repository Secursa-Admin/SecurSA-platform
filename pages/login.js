export default function LoginPage() {
  return (
    <div className="min-h-screen bg-white py-16 px-6 text-[#00205B]">
      <div className="max-w-md mx-auto border border-gray-200 rounded-lg shadow p-6">
        <h1 className="text-3xl font-bold text-center mb-6">Security Provider Login</h1>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email or Username</label>
          <input type="text" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your email or username" />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Password</label>
          <input type="password" className="w-full border border-gray-300 rounded p-2" placeholder="Enter your password" />
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm mb-6">
          <a href="#" className="text-[#84BD00] hover:underline">Forgot password?</a>
        </div>

        {/* Login Button */}
        <div className="mb-4">
          <button className="w-full bg-[#00205B] text-white font-bold py-2 px-4 rounded hover:bg-[#001944]">
            Log In
          </button>
        </div>

        {/* Divider */}
        <div className="text-center text-sm text-gray-500 my-4">or</div>

        {/* Register Redirect */}
        <div className="text-center text-sm">
          Don’t have an account?{' '}
          <a href="/register" className="text-[#84BD00] font-semibold hover:underline">Register here</a>
        </div>
      </div>
    </div>
  );
}
