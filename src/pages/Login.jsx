import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const { usersData, dispatch } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    const user = usersData.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
      navigate("/");
    } else {
      alert("Incorrect email or password");
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
                placeholder="qw@a"
              />
            </fieldset>
            <fieldset className="fieldset">
              <legend className="fieldset-legend text-black ">Password:</legend>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="1212"
              />
            </fieldset>
            <div className="!my-5 flex items-center gap-5">
              <button className="btn btn-primary !bg-[#1D232A]">Login</button>
              <NavLink to='/signup'>
                <p>Signup</p>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
