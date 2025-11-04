import React from 'react';

export default function CTA() {
  return (
    <section id="start" className="relative w-full bg-[#060b1a] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl font-bold sm:text-4xl">Ready to unlock VIP cashback?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-blue-100/80">
          Join the loyalty program and start collecting rewards with a single click. Dark, sleek, and lightning fast.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 px-8 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-cyan-300"
          >
            Get Started
          </a>
          <a
            href="#privileges"
            className="rounded-xl border border-white/15 bg-white/5 px-8 py-3 text-base font-semibold text-blue-100 backdrop-blur transition hover:bg-white/10"
          >
            View Privileges
          </a>
        </div>
        <p className="mt-6 text-xs text-blue-200/60">
          By continuing you agree to the program terms and privacy policy.
        </p>
      </div>
    </section>
  );
}
