import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Added useNavigate import
import { useForm } from "react-hook-form";
import Login from "./Login"; // Ensure you import the Login component
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; // Import toast and Toaster from react-hot-toast

function Signup() {
  const location = useLocation();
  const navigate = useNavigate(); // Correctly define useNavigate
  const from = location.state?.from?.pathname || "/"; // Corrected the assignment of `from`

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      console.log(res.data);
      if (res.data) {
        toast.success("Successfully Signup!"); // Display success toast
        localStorage.setItem("Users", JSON.stringify(res.data.user));
        navigate(from, { replace: true }); // Navigate to the previous page
      }
    } catch (err) {
      if (err.response) {
        console.log(err);
        toast.error("Error: " + err.response.data.message); // Display error toast
      }
    }
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center">
        <div className="w-[600px]">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* Close button for the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <h3 className="font-bold text-lg">Sign Up</h3>
              {/* Name */}
              <div className="mt-4 space-y-2">
                <span>Fullname</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Fullname"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: true })}
                />
                {errors.fullname && (
                  <p className="text-red-500">Name is required</p>
                )}
              </div>
              {/* Email */}
              <div className="mt-4 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your E-mail"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <p className="text-red-500">Email is required</p>
                )}
              </div>
              {/* Password */}
              <div className="mt-4 space-y-2">
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <p className="text-red-500">Password is required</p>
                )}
              </div>
              {/* Button */}
              <div className="flex justify-around mt-4">
                <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
                  Signup
                </button>
                <p className="text-xl">
                  Have an Account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                </p>
              </div>
              {/* Include Login Component */}
              <dialog id="my_modal_3" className="modal">
                <Login />
              </dialog>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
