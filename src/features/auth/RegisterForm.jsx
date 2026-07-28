import React from "react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const RegisterForm = () => {
  return (
    <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
      {/* Full Name Input */}
      <div className="space-y-2">
        <input
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
