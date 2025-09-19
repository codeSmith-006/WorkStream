"use client";
import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log("Submitted user:", data); // <-- console e input show hobe

    // Simple validation example
    // if (data.email !== "test@example.com") {
    //   setLoginError("Email not found");
    // }

    // else if (data.password !== "123456") {
    //   setLoginError("Password is incorrect");
    // } else {
    //   setLoginError("");
    //   console.log("Login successful for:", data.email);
    // }


  };



  return (
    <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <div className='card-body'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className="fieldset">
            <Link href="/">

              <ArrowLeft />

            </Link>
            <h1 className='text-5xl font-semibold'>Register !</h1>

            {/* Name Field */}
            <label className="label">Name</label>
            <input
              type="text"
              autoComplete="off"
              {...register('name', {
                required: true,
              })}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#438af7]"
              placeholder="Enter your name"
            />
            {errors.name?.type === "required" && (
              <p role='alert' className='text-red-600'>
                Name is required
              </p>
            )}

            {/* Image field */}
            <label className="label">Your Photo</label>
            <input type="file"
              {...register('image', {
                required: true,
              })}
              // onChange={handleImageUpload}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#438af7]"
              placeholder="Your Profile picture" />
            {errors.image?.type === "required" && (
              <p role='alert' className='text-red-600'>
                Your photo is required
              </p>
            )}

            {/* Email Field */}

            <label className="label">Email</label>
            <input
              type="email"
              autoComplete="off"
              {...register('email', {
                required: true,
              })}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#438af7]"
              placeholder="Enter your email"
            />
            {errors.email?.type === "required" && (
              <p role='alert' className='text-red-600'>
                Email is required
              </p>
            )}

            {/* Password Field */}

            <label className="label">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              {...register('password', {
                required: true,
                minLength: 6
              })}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#438af7]"
              placeholder="Create a password"
            />

            {errors.password?.type === "minLength" && (
              <p role='alert' className='text-red-600'>
                Password must be at least 6 characters
              </p>
            )}

            {errors.password?.type === "required" && (
              <p role='alert' className='text-red-600'>
                Password is required
              </p>
            )}

            <button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg mt-4"

            // here it is used login button loadign for user better experience

            // disabled={loading}
            >
              {/* {loading ? "Logging in..." : "Login"} */}

              Sign Up
            </button>
          </fieldset>

          <p className="text-lg text-center">
            <small>
              Already have an account?
              <Link
                href='/login'
                className='btn-link text-blue-500 link-hover ml-1'
              >
                SignIn</Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
}
