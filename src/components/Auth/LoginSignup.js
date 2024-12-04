import React, { useState } from "react";
import { login, signup } from "../Auth/Firebase";
import { useNavigate } from "react-router-dom";
import SmallFooter from '../Footer/SmallFooter'
import SmallNavBar from "../Navbar/SmallNavBar";
const LoginSignup = () => {
  const [signState, setSignState] = useState("Sign In");
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // User authentication logic
  const user_auth = async (event) => {
    event.preventDefault();
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
  };

  // Form submission handling
  const handleSubmit = (event) => {
    event.preventDefault();

    // Simulate login validation
    const loginSuccessful = true;
    if (loginSuccessful) {
      navigate("/");
    } else {
      alert("Login failed. Please try again.");
    }
  };

  return (
    <>
    <SmallNavBar />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-bl from-blue-50 via-gray-100 to-blue-200 text-white">
      <div className="w-full max-w-md bg-gray-900 rounded-lg shadow-md p-8 m-14">
        {/* Form Title */}
        <h1 className="text-2xl font-bold mb-6 text-center">{signState}</h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {signState === "Sign Up" && (
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
                placeholder="Your Name" autoComplete="on"
                required
              />
            </div>
          )}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Your Email" autoComplete="on"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-orange-600"
              placeholder="Your Password" autoComplete="current-password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={user_auth}
            className="w-full py-2 bg-orange-600 hover:bg-orange-700 rounded-lg text-white font-semibold transition duration-300"
          >
            {signState}
          </button>
        </form>

        {/* Form Help */}
        <div className="flex justify-between items-center mt-4 text-sm">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="remember" autoComplete="on"
              className="form-checkbox h-4 w-4 text-orange-600 bg-gray-700 border-gray-600 focus:ring-orange-600"
            />
            <label htmlFor="remember" className="text-gray-300">
              Remember Me
            </label>
          </div>
          <p className="text-orange-500 cursor-pointer hover:underline">
            Need Help?
          </p>
        </div>

        {/* Form Switch */}
        <div className="mt-6 text-center text-sm text-gray-300">
          {signState === "Sign In" ? (
            <p>
              New to GriffinTechs?{" "}
              <span
                onClick={() => setSignState("Sign Up")}
                className="text-orange-500 font-medium cursor-pointer hover:underline"
              >
                Sign Up Now
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setSignState("Sign In")}
                className="text-orange-500 font-medium cursor-pointer hover:underline"
              >
                Sign In Now
              </span>
            </p>
          )}
        </div>
      </div>
    
    </div>
      <SmallFooter/>
      </>
  );
};

export default LoginSignup;
