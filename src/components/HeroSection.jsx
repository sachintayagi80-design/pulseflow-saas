import React, { useState } from 'react';

export default function HeroSection({ onOpenModal }) {
  const [synced, setSynced] = useState(false);

  const metrics = synced
    ? { velocity: '98 pts', cycleTime: '1.4 days', prMerged: '34 PRs', confidence: '97%' }
    : { velocity: '82 pts', cycleTime: '1.9 days', prMerged: '27 PRs', confidence: '89%' };

  const bars = synced ? [65, 74, 80, 88, 92, 98] : [55, 62, 68, 72, 78, 82];

  return (
    <section className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28 bg-gradient-to-b from-indigo-50/70 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Copy Column */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100/80 text-indigo-700 text-xs font-semibold mb-6">
              <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
              New: AI Pull Request Bottleneck Radar
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Ship software faster without{' '}
              <span className="text-indigo-600">status-meeting overload.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              PulseFlow connects your GitHub, Linear, and Slack activity into real-time sprint
              intelligence—spotting blocked pull requests and predicting release dates automatically.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <button
                onClick={onOpenModal}
                className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
              >
                Start Free 14-Day Trial
              </button>
              <a
                href="#how-it-works"
                className="w-full sm:w-auto px-6 py-3.5 text-base font-semibold text-slate-700 bg-white border border-slate-200 rounded-xl hover:bg-slate-50 hover:border-slate-300 transition-all text-center"
              >
                See How It Works
              </a>
            </div>

            <p className="mt-4 text-xs text-slate-500">
              No credit card required • SOC2 Type II certified • 5-minute OAuth setup
            </p>
          </div>

          {/* Right Interactive Dashboard Preview */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/60 overflow-hidden">
              {/* Browser Top Bar */}
              <div className="px-4 py-3 bg-slate-900 text-slate-300 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="w-3 h-3 rounded-full bg-amber-400" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500" />
                  <span className="ml-2 text-xs font-mono text-slate-400">
                    app.pulseflow.io/sprint-24
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setSynced((prev) => !prev)}
                  className="px-2.5 py-1 text-xs font-semibold rounded-md bg-indigo-600 hover:bg-indigo-500 text-white transition-colors cursor-pointer"
                >
                  {synced ? '✓ Live Synced' : 'Simulate Live Sync'}
                </button>
              </div>

              {/* Dashboard Body */}
              <div className="p-6 space-y-6">
                {/* KPI Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500">Sprint Velocity</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">{metrics.velocity}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500">Avg Cycle Time</p>
                    <p className="mt-1 text-lg font-bold text-emerald-600">{metrics.cycleTime}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                    <p className="text-xs text-slate-500">PRs Merged</p>
                    <p className="mt-1 text-lg font-bold text-slate-900">{metrics.prMerged}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                    <p className="text-xs text-indigo-700 font-medium">On-Time Odds</p>
                    <p className="mt-1 text-lg font-bold text-indigo-700">{metrics.confidence}</p>
                  </div>
                </div>

                {/* Velocity Bar Visualization */}
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-medium text-slate-700">6-Sprint Delivery Trend</span>
                    <span>{synced ? '+19.5% after auto-triage' : 'Baseline velocity'}</span>
                  </div>
                  <div className="h-32 flex items-end gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
                    {bars.map((val, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                        <div
                          style={{ height: `${val}%` }}
                          className={`w-full rounded-t-md transition-all duration-500 ${
                            idx === bars.length - 1 ? 'bg-indigo-600' : 'bg-indigo-300'
                          }`}
                        />
                        <span className="text-[10px] font-medium text-slate-500">S{19 + idx}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Live Task Feed */}
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Automated Activity Feed
                  </p>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs">
                    <span className="font-medium text-slate-800">
                      PR #418 • Auth token refresh optimization
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                      Merged
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 text-xs">
                    <span className="font-medium text-slate-800">
                      PR #422 • Billing webhook retry queue
                    </span>
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold">
                      {synced ? 'Reviewer Assigned' : 'Needs Review (14h)'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}