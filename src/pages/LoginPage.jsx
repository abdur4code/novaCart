import React from 'react'
import LoginForm from '../features/auth/LoginForm'
import { Link } from "react-router";


const LoginPage = () => {
  return (
     <div className="w-full lg:w-1/2 lg:max-w-md">
      <div className="rounded-2xl border border-white/10 bg-white/3 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Enter your credentials to access your dashboard.
          </p>
        </div>

        {/* Login Form  */}
        <LoginForm />

        {/* Sign Up Link */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Don't have an account?{" "}
          <Link
            to={"/register"}
            className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300 hover:underline"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage