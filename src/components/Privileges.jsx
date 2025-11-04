import React from 'react';
import { Star, Shield, Crown, Gift, CreditCard, Sparkles, BadgeCheck, ShieldCheck, Rocket, Smartphone, Clock, Coins, Trophy, Headphones } from 'lucide-react';

const perks = [
  { icon: Crown, title: 'VIP Status', desc: 'Priority access and elevated limits for loyal members.' },
  { icon: Coins, title: 'Instant Cashback', desc: 'Claim rewards whenever you want — you’re in control.' },
  { icon: CreditCard, title: 'Flexible Payouts', desc: 'Choose where your cashback lands for maximum convenience.' },
  { icon: Gift, title: 'Surprise Drops', desc: 'Exclusive gifts, skins, and seasonal bonuses.' },
  { icon: Rocket, title: 'Boosted Earnings', desc: 'Higher tiers unlock multiplier boosts.' },
  { icon: Shield, title: 'Secure & Private', desc: 'Enterprise-level security and privacy-first design.' },
  { icon: BadgeCheck, title: 'Verified Fairness', desc: 'Transparent mechanics with independent verification.' },
  { icon: Smartphone, title: 'Mobile First', desc: 'Optimized for on-the-go play — buttery smooth.' },
  { icon: Clock, title: 'On-Demand', desc: 'No waiting windows — request rewards instantly.' },
  { icon: Star, title: 'Elite Support', desc: 'Dedicated concierge for top-tier players.' },
  { icon: Sparkles, title: 'Limited Events', desc: 'VIP-only tournaments and live events.' },
  { icon: ShieldCheck, title: 'Fraud Protection', desc: 'Real-time monitoring protects your account.' },
  { icon: Trophy, title: 'Leaderboard Perks', desc: 'Climb ranks to unlock unique privileges.' },
  { icon: Headphones, title: '24/7 Assistance', desc: 'Always-on help when you need it.' },
];

export default function Privileges() {
  return (
    <section id="privileges" className="relative w-full bg-gradient-to-b from-[#0b1f54] via-[#0a1740] to-[#081126] py-24 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Your exclusive privileges</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-blue-100/80">Designed for a dark, futuristic experience with glowing accents and smooth visuals.</p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {perks.map(({ icon: Icon, title, desc }, idx) => (
            <div
              key={title + idx}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 shadow-[0_0_30px_-10px_rgba(59,130,246,0.35)] transition hover:border-cyan-400/30 hover:shadow-cyan-400/30"
            >
              <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition group-hover:opacity-80" />
              <div className="relative flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white shadow-lg">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
              </div>
              <p className="relative mt-3 text-sm leading-relaxed text-blue-100/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
