"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ArrowLeft } from "lucide-react";

export default function LoginPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [loginError, setLoginError] = useState("");

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
            <Link href="/"><ArrowLeft /></Link>
            <h1 className='text-5xl font-semibold'>Login !</h1>

            <label className="label">Email</label>
            <input
              type="email"
              autoComplete="off"
              {...register('email')}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              autoComplete="new-password"
              {...register('password', {
                required: true,
                minLength: 6
              })}
              className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-400"
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

            <div><a className="link link-hover">Forgot password?</a></div>

            {/* <button className="btn bg-[#caeb66] text-black font-bold w-full mt-4" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button> */}
          </fieldset>

          <p>
            <small>
              Don't have an account?
              <Link href='/register' className='btn-link text-blue-700'> Register</Link>
            </small>
          </p>
        </form>
      </div>
    </div>
  );
}
