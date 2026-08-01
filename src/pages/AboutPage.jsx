import React from "react";
import {
  Sparkles,
  ShieldCheck,
  Truck,
  Heart,
  Star,
  Users,
  Award,
  ArrowRight,
  ShoppingBag,
  CheckCircle2,
  Smile,
  Zap,
} from "lucide-react";
import { Link } from "react-router"; // or "react-router-dom"

const AboutPage = () => {
  // 1. STATS DATA (4-Column Top Grid)
  const STATS = [
    {
      icon: ShoppingBag,
      value: "2,500+",
      label: "Products",
      detail: "Curated across 6 categories",
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
    },
    {
      icon: Users,
      value: "40,000+",
      label: "Happy Customers",
      detail: "Verified shoppers nationwide",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Star,
      value: "4.8 / 5",
      label: "Avg. Rating",
      detail: "From 15,000+ real reviews",
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
    {
      icon: Truck,
      value: "99.4%",
      label: "On-Time Delivery",
      detail: "Tracked priority logistics",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
  ];

  // 2. VALUES DATA (2x2 Middle Grid)
  const VALUES = [
    {
      icon: ShieldCheck,
      title: "Trust & Authenticity",
      description:
        "Every product is rigorously verified for quality, durability, and authenticity before it ever touches our listing catalog.",
      accent: "group-hover:border-emerald-500/40 group-hover:bg-emerald-500/5",
      iconBox: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      icon: Zap,
      title: "Lightning-Fast Speed",
      description:
        "We obsess over page performance and delivery times so your orders are placed in seconds and arrive exactly when promised.",
      accent: "group-hover:border-blue-500/40 group-hover:bg-blue-500/5",
      iconBox: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      icon: Heart,
      title: "Customer-First Community",
      description:
        "Built around genuine customer feedback, transparent return policies, and responsive support, not just business spreadsheets.",
      accent: "group-hover:border-rose-500/40 group-hover:bg-rose-500/5",
      iconBox: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    },
    {
      icon: Award,
      title: "Curated Quality",
      description:
        "We curate the best essentials no filler, no inflated markups, and no junk. Just honest products at predictable prices.",
      accent: "group-hover:border-amber-500/40 group-hover:bg-amber-500/5",
      iconBox: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    },
  ];

  // 3. TEAM DATA (4-Column Bottom Grid)
  const TEAM = [
    {
      initial: "A",
      name: "Abdur Rahim",
      role: "Founder & CEO",
      gradient: "from-indigo-600 to-blue-600 shadow-indigo-500/25",
    },
    {
      initial: "F",
      name: "Farhan Khan",
      role: "Head of Product",
      gradient: "from-blue-600 to-cyan-600 shadow-blue-500/25",
    },
    {
      initial: "A",
      name: "Areeb Shiekh",
      role: "Lead Engineer",
      gradient: "from-purple-600 to-indigo-600 shadow-purple-500/25",
    },
    {
      initial: "F",
      name: "Farhan Khan",
      role: "Design Director",
      gradient: "from-rose-600 to-amber-600 shadow-rose-500/25",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-16 font-sans text-slate-300 lg:px-12">
      {/* ========================================================= */}
      {/* AMBIENT BACKGROUND GLOW GRADIENTS (DEEP & VIBRANT) */}
      {/* ========================================================= */}
      {/* Top Left Indigo Glow */}
      <div className="pointer-events-none absolute -left-40 top-0 h-150 w-150 rounded-full bg-indigo-600/15 blur-[140px]" />
      {/* Center Right Blue Glow */}
      <div className="pointer-events-none absolute -right-40 top-125 h-137.5 w-137.5 rounded-full bg-blue-600/15 blur-[140px]" />
      {/* Bottom Center Purple Glow */}
      <div className="pointer-events-none absolute bottom-10 left-1/3 h-125 w-125 rounded-full bg-purple-600/15 blur-[140px]" />

      <main className="relative z-10 mx-auto max-w-6xl space-y-20">
        {/* ========================================================= */}
        {/* 1. HERO SECTION */}
        {/* ========================================================= */}
        <section className="text-center">
          {/* Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-400 shadow-sm">
            <Sparkles size={14} className="text-indigo-400" />
            <span>Our Mission</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            About <span className="text-indigo-400">NovaCart</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Novacart is a next-generation e-commerce store built to make online
            shopping fast, transparent, and enjoyable for everyone.
          </p>
        </section>

        {/* ========================================================= */}
        {/* 2. STATS GRID (4 Columns) */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div
                key={idx}
                className="group flex flex-col justify-between rounded-2xl border border-white/10 bg-white/3 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/6"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-extrabold tracking-tight text-white">
                    {stat.value}
                  </span>
                  <div
                    className={`rounded-xl border p-2.5 transition-transform duration-300 group-hover:scale-110 ${stat.color}`}
                  >
                    <Icon size={18} />
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-500">{stat.detail}</div>
                </div>
              </div>
            );
          })}
        </section>

        {/* ========================================================= */}
        {/* 3. OUR STORY SECTION */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-br from-white/5 via-white/3 to-transparent p-8 shadow-2xl backdrop-blur-xl sm:p-12">
          {/* Decorative Left Accent Strip */}
          <div className="absolute inset-y-0 left-0 w-1.5 bg-linear-to-b from-indigo-500 via-blue-500 to-purple-500" />

          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Our Story
            </h2>
            <p className="text-sm leading-relaxed text-slate-300 sm:text-base">
              Novacart started as a focused project by engineers who were tired
              of bloated, sluggish online stores. We asked ourselves a simple
              question:{" "}
              <span className="font-semibold text-indigo-400 italic">
                what if shopping online was actually fast, honest, and
                clutter-free?
              </span>
            </p>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              Today, Novacart serves over 40,000 customers across the country.
              We curate everyday essentials, fashion, and high-performance
              electronics, all at transparent prices that don't require hidden
              checkout markups.
            </p>
            <p className="text-sm leading-relaxed text-slate-400 sm:text-base">
              We’re still the same team obsessed with speed,
              reliability, and making you feel great about every single order
              you place here.
            </p>

            {/* Quote / Highlight Strip at bottom */}
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-6 text-xs font-semibold uppercase tracking-wider text-slate-500">
              <CheckCircle2 size={16} className="text-emerald-400" />
              <span>
                No dark patterns &bull; Real customer support &bull; Fast
                shipping
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. WHAT WE STAND FOR (2x2 Grid) */}
        {/* ========================================================= */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              What We Stand For
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              The core principles behind our catalog and fulfillment process.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {VALUES.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className={`group relative flex items-start gap-5 rounded-2xl border border-white/10 bg-white/3 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 sm:p-8 ${item.accent}`}
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-110 ${item.iconBox}`}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-bold text-white group-hover:text-white sm:text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-400 sm:text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 5. MEET THE TEAM (4-Column Grid) */}
        {/* ========================================================= */}
        <section className="space-y-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Meet the Team
            </h2>
            <p className="mt-1 text-sm text-slate-400">
              The people building and curating the Novacart experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((member, idx) => (
              <div
                key={idx}
                className="group flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/3 p-6 text-center shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/6"
              >
                {/* Colorful Gradient Initial Square */}
                <div
                  className={`mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-tr ${member.gradient} shadow-lg transition-transform duration-300 group-hover:scale-110`}
                >
                  <span className="text-2xl font-extrabold text-white">
                    {member.initial}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white">
                  {member.name}
                </h4>
                <p className="mt-1 text-xs font-medium text-slate-400">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 6. READY TO SHOP? (Bottom CTA Banner) */}
        {/* ========================================================= */}
        <section className="relative overflow-hidden rounded-2xl border border-white/10 bg-linear-to-r from-indigo-950/40 via-slate-900 to-blue-950/40 p-8 text-center shadow-2xl backdrop-blur-xl sm:p-12">
          {/* Subtle Glow Behind CTA Button */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-48 w-48 rounded-full bg-indigo-500/20 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto max-w-lg space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Ready to shop?
            </h2>
            <p className="text-sm text-slate-400 sm:text-base">
              Explore thousands of curated products at unbeatable, transparent
              prices.
            </p>
            <div className="pt-2">
              <Link
                to="/main/product"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-all hover:bg-indigo-500 hover:shadow-indigo-500/40 active:scale-95"
              >
                Browse Products
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutPage;
