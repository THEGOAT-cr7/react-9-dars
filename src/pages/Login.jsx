import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const { userData, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    if (userData.email === email && userData.password === password) {
      dispatch({ type: "LOGIN" });
      navigate("/");
    }
  };

  return (
    <section>
      <div>
        <div className="align-elements h-screen grid place-items-center">
          <form onSubmit={handleSubmit} className="w-96">
            <h1 className="text-3xl font-bold mb-5 text-black">Login</h1>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black ">Email:</legend>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Type here..."
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black ">Password:</legend>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Type here..."
              />
            </fieldset>
            <div className="my-5 ">
              <button className="btn btn-primary !bg-[#1D232A]">Login</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
