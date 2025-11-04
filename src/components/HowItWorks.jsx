import React from 'react';
import { MousePointerClick, Wallet, Repeat } from 'lucide-react';

const steps = [
  {
    icon: MousePointerClick,
    title: 'Play & Earn',
    desc: 'Enjoy the experience. As you play, you continuously earn cashback based on your activity.'
  },
  {
    icon: Repeat,
    title: 'Choose When',
    desc: 'No fixed schedule — trigger your cashback whenever it suits you best.'
  },
  {
    icon: Wallet,
    title: 'Instant Payout',
    desc: 'Funds are transferred to your selected wallet with glowing-fast confirmation.'
  }
];

export default function HowItWorks() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#081126] via-[#0a1740] to-[#0b1f54] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-10 top-8 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">How it works</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-blue-100/80">A streamlined flow designed for flexibility and speed.</p>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-blue-600/10 blur-2xl" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold">{title}</h3>
              </div>
              <p className="relative mt-3 text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
