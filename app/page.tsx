export default function Page() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Database Tools
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Visualize Database Query Costs{" "}
          <span className="text-[#58a6ff]">in Real-Time</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Connect your database, analyze execution plans, and get actionable optimization suggestions — all in one interactive dashboard. Stop overpaying for slow queries.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Start Optimizing — $25/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for trial</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { stat: "10x", label: "Faster query diagnosis" },
            { stat: "40%", label: "Average cost reduction" },
            { stat: "Real-time", label: "Execution plan analysis" }
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-3xl font-bold text-[#58a6ff] mb-1">{item.stat}</div>
              <div className="text-[#8b949e] text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features strip */}
      <section className="border-y border-[#21262d] bg-[#161b22] py-10">
        <div className="max-w-4xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { icon: "⚡", label: "Live Cost Breakdown" },
            { icon: "🔍", label: "Execution Plan Viewer" },
            { icon: "🚨", label: "Slow Query Alerts" },
            { icon: "💡", label: "Optimization Tips" }
          ].map((f) => (
            <div key={f.label} className="flex flex-col items-center gap-2">
              <span className="text-2xl">{f.icon}</span>
              <span className="text-sm font-medium text-[#c9d1d9]">{f.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-3">Simple Pricing</h2>
        <p className="text-[#8b949e] mb-10">One plan. Everything included.</p>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$25</div>
          <div className="text-[#8b949e] mb-8">/month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited query analysis",
              "Real-time execution plan visualization",
              "Cost breakdown per query",
              "Slow query alerts & notifications",
              "AI-powered optimization suggestions",
              "PostgreSQL, MySQL, SQLite support",
              "Export reports as PDF/CSV"
            ].map((feat) => (
              <li key={feat} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feat}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-4 rounded-lg text-lg transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which databases are supported?",
              a: "We support PostgreSQL, MySQL, and SQLite. More databases including MongoDB and Redis are on the roadmap."
            },
            {
              q: "Is my connection string stored securely?",
              a: "Connection strings are encrypted at rest and in transit. We never log or expose your credentials, and you can revoke access at any time."
            },
            {
              q: "Can I cancel my subscription anytime?",
              a: "Yes. Cancel anytime from your billing dashboard with no questions asked. You keep access until the end of your billing period."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-8 text-center text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} Database Query Cost Visualizer. All rights reserved.
      </footer>
    </main>
  );
}
