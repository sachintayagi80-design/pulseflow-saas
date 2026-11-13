import React, { useState } from 'react';
import { WORKFLOW_STEPS } from '../data/landingData';

export default function HowItWorksSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentStep = WORKFLOW_STEPS[activeIndex];

  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-400">
            How PulseFlow Works
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
            From zero to live sprint intelligence in under 5 minutes
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg">
            PulseFlow sits quietly on top of the tools your developers already love, turning noisy
            notifications into clear release signals.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Step Tabs */}
          <div className="lg:col-span-6 space-y-4">
            {WORKFLOW_STEPS.map((item, idx) => {
              const isSelected = idx === activeIndex;
              return (
                <button
                  key={item.step}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`w-full text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-slate-800/90 border-indigo-500 shadow-lg shadow-indigo-950/50'
                      : 'bg-slate-800/30 border-slate-800 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-2.5 py-1 rounded-md text-xs font-bold ${
                        isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-700 text-slate-300'
                      }`}
                    >
                      STEP {item.step}
                    </span>
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{item.summary}</p>
                </button>
              );
            })}
          </div>

          {/* Dynamic Preview Card */}
          <div className="lg:col-span-6 bg-slate-800 border border-slate-700 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-700">
              <div>
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold">
                  Step {currentStep.step} Live Preview
                </span>
                <h4 className="text-xl font-bold text-white mt-1">{currentStep.previewTitle}</h4>
              </div>
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
            </div>

            <div className="mt-6 space-y-3.5">
              {currentStep.items.map((row, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-4 rounded-xl bg-slate-900/80 border border-slate-700/70"
                >
                  <span className="font-medium text-sm text-slate-100">{row.name}</span>
                  <span className={`self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold ${row.badge}`}>
                    {row.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}