import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useAuthContext } from "../context/AuthContext";
import AuthService from "../services/auth.service";
import Swal from "sweetalert2";

const Register = () => {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    confPassword: "",
    type: "teacher",
    school: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setRegister({ ...register, [name]: value });
  };

  const handleOnClick = async () => {
    try {
      if (register.password !== register.confPassword) {
        return Swal.fire({
          icon: "error",
          title: "Login failed!",
          text: "Passwords do not match. Please try again.",
        });
      }
      const response = await AuthService.register(register);
      if (response?.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Login successful!",
        });

        setRegister({
          name: "",
          email: "",
          password: "",
          confPassword: "",
          type: "teacher",
          school: "",
          phone: "",
        });
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Login failed!",
        text: "Invalid email or password",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center">
        <div className="card w-96 bg-base-100 shadow-xl mt-20 mb-20">
          <div className="card-body">
            <h2 className="card-title">Register!</h2>
            <div className="items-center mt-2">
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="name"
                  name="name"
                  onChange={handleOnChange}
                  value={register.name}
                />
              </label>
              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                  <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Email"
                  name="email"
                  onChange={handleOnChange}
                  value={register.email}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  name="password"
                  onChange={handleOnChange}
                  value={register.password}
                  className="grow"
                  placeholder="password"
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>

                <input
                  type="text"
                  className="grow"
                  placeholder="confirm password"
                  name="confPassword"
                  onChange={handleOnChange}
                  value={register.confPassword}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M12 3L1 9l11 6 9-4.91v5.45H21v-7L12 3zM3.18 9L12 13.09 20.82 9 12 4.91 3.18 9zM5 12v6h2v-4h10v4h2v-6l-7 3.91L5 12z" />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="school"
                  name="school"
                  onChange={handleOnChange}
                  value={register.school}
                />
              </label>

              <label className="input input-bordered flex items-center gap-2 mb-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.2.48 2.52.73 3.88.73a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.36.25 2.68.73 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" />
                </svg>

                <input
                  type="text"
                  className="grow"
                  placeholder="phone"
                  name="phone"
                  onChange={handleOnChange}
                  value={register.phone}
                />
              </label>
            </div>
            <div className="card-actions justify-center">
              <button
                type="submit"
                onClick={handleOnClick}
                className="btn btn-primary w-full"
              >
                Register
              </button>
              <div className="flex gap-2 justify-center items-center text-xs">
                <p>Already have an account? </p>
                <a
                  href="/login"
                  className="hover:text-blue-400 hover:border-b-1 delay-150 duration-150 ease-in-out"
                >
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
