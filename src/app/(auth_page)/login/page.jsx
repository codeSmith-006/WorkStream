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
            <h1 className='text-5xl font-semibold'>Login !</h1>

            <label className="label">Email</label>
            <input
              type="email"
              autoComplete="off"
              {...register('email', {
                required: true,
              })}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#438af7]"
              placeholder="Email"
            />
            {errors.email?.type === "required" && (
              <p role='alert' className='text-red-600'>
                Email is required
              </p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              {...register('password', {
                required: true,
                minLength: 6
              })}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[#438af7]"
              placeholder="Password"
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

            <div><a className="link link-hover flex justify-end ">Forgot password?</a></div>

            <button
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 font-medium text-lg"

            // here it is used login button loadign for user better experience

            // disabled={loading}
            >
              {/* {loading ? "Logging in..." : "Login"} */}

              Sign In
            </button>
          </fieldset>

          <p className="text-lg text-center">
            <small>
              Don't have an account?
              <Link
                href='/register'
                className='btn-link text-blue-500 link-hover ml-1'
              >
                Register</Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
}
