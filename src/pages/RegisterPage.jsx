import React from 'react'
import { Link } from 'react-router'
import RegisterForm from '../features/auth/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="w-full lg:w-1/2 lg:max-w-md">
      <div className="rounded-2xl border border-white/10 bg-white/3 p-8 shadow-2xl backdrop-blur-xl sm:p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight text-white">
            Create an account
          </h2>
          <p className="mt-2 text-sm text-slate-400">
            Fill in your details below to get started.
          </p>
        </div>

        <RegisterForm />

        {/* Log In Link */}
        <p className="mt-8 text-center text-sm text-slate-400">
          Already have an account?{" "}
          <Link
            to={"/"}
            className="font-semibold text-indigo-400 transition-colors hover:text-indigo-300 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage