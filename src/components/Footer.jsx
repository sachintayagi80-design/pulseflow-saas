import React from 'react';
import { NAV_LINKS } from '../data/landingData';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-8 border-b border-slate-800/80">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
                <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M3 13H7.5L10.5 6L14 18L17 11H21"
                    stroke="currentColor"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-lg font-bold text-white">
                Pulse<span className="text-indigo-400">Flow</span>
              </span>
            </a>
            <p className="mt-2 text-sm text-slate-400 max-w-sm">
              Real-time sprint intelligence and automated PR velocity analytics for modern software
              teams.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-sm" aria-label="Footer Navigation">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PulseFlow Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#contact" className="hover:text-slate-300">Privacy Policy</a>
            <a href="#contact" className="hover:text-slate-300">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-300">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}