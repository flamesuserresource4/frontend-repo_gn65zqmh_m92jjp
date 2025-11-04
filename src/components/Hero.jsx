import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-[#081126] via-[#0a1740] to-[#0b1f54] text-white">
      {/* Glowing radial accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[28rem] w-[28rem] rounded-full bg-cyan-500/20 blur-3xl" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col items-center gap-16 px-6 py-24 md:flex-row md:gap-10 md:py-32">
        {/* Left column: copy + actions */}
        <div className="z-10 flex w-full flex-col items-start md:w-1/2">
          <button className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium tracking-wide text-blue-100 shadow-sm backdrop-blur transition hover:bg-white/10">
            New VIP loyalty program
          </button>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Cashback at the click of a button
          </h1>
          <p className="mt-4 max-w-xl text-lg text-blue-100/90">
            You decide when to receive it
          </p>
          <p className="mt-1 max-w-xl text-base text-blue-100/70">
            We appreciate it. Thank you
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#start"
              className="rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-cyan-300"
            >
              Start the game
            </a>
            <a
              href="#privileges"
              className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-blue-100 backdrop-blur transition hover:bg-white/10"
            >
              Explore benefits
            </a>
          </div>
        </div>

        {/* Right column: 3D Spline inside a phone mockup */}
        <div className="relative z-10 w-full md:w-1/2">
          <div className="mx-auto aspect-[9/19] w-full max-w-sm rounded-[2.4rem] border border-white/10 bg-[#0a1533] p-3 shadow-[0_0_40px_-10px_rgba(56,189,248,0.35)]">
            <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-gradient-to-b from-blue-950 to-[#0b1f54]">
              <Spline
                scene="https://prod.spline.design/FduaNp3csZktbOi3/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-cyan-300/0 to-blue-600/10" />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-x-6 -bottom-6 mx-auto h-24 max-w-sm rounded-full bg-cyan-500/20 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
