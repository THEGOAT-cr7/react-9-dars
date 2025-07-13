import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const displayName = formData.get("displayName");
    const email = formData.get("email");
    const password = formData.get("password");
    const photoURL = formData.get("photoURL");

    const newUser = {
      displayName,
      email,
      password,
      photoURL,
    };

    dispatch({ type: "SIGNUP", payload: newUser });
    navigate("/login");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="rounded-xl p-10 w-full max-w-lg">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Sign Up
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col !my-3">
            <label
              htmlFor="displayName"
              className="text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="displayName"
              name="displayName"
              type="text"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D232A]"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="flex flex-col !my-3">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D232A]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col !my-3">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D232A]"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex flex-col !my-3">
            <label
              htmlFor="photoURL"
              className="text-sm font-medium text-gray-700"
            >
              Photo URL
            </label>
            <input
              id="photoURL"
              name="photoURL"
              type="url"
              className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#1D232A]"
              placeholder="Paste your image URL"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#1D232A] text-white font-semibold py-2 rounded-md hover:bg-[#111417] transition duration-300"
          >
            Signup
          </button>
        </form>
      </div>
    </section>
  );
}

export default Signup;
