import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { registerUser, clearError } from "./authSlice";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  const dispatch = useDispatch();
  const authError = useSelector((state) => state.auth.error);

  const onSubmit = (data) => {
    dispatch(clearError());
    dispatch(
      registerUser({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
      }),
    );
    reset();
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Full Name Input */}
      <div className="space-y-2">
        <input
          {...register("fullName", {
            required: "Full Name is required",
          })}
          id="fullName"
          type="text"
          placeholder="Full Name"
          className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-black/40 focus:ring-1 focus:ring-indigo-500"
          required
        />
      </div>

      {/* Email Input */}
      <div className="space-y-2">
        <input
          {...register("email", {
            required: "Email is required",
          })}
          id="email"
          type="email"
          placeholder="Email Address"
          className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-black/40 focus:ring-1 focus:ring-indigo-500"
          required
        />
      </div>

      {/* Password Input */}
      <div className="space-y-2">
        <input
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum 6 characters" },
          })}
          id="password"
          type="password"
          placeholder="Password"
          className="w-full rounded-lg border border-white/10 bg-black/20 px-4 py-2.5 text-sm text-white placeholder-slate-500 outline-none transition-all focus:border-indigo-500 focus:bg-black/40 focus:ring-1 focus:ring-indigo-500"
          required
          minLength={8}
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="group mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-slate-900"
      >
        Create Account
        <ArrowRight
          size={16}
          className="transition-transform group-hover:translate-x-1"
        />
      </button>
    </form>
  );
};

export default RegisterForm;
