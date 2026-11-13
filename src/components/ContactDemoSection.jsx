import React, { useState } from 'react';

export default function ContactDemoSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    teamSize: '11-50 engineers',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formData.workEmail.trim())) {
      newErrors.workEmail = 'Please enter a valid work email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please share a brief note (at least 10 characters).';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5">
            <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
              Request a Personalized Demo
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              See PulseFlow running on your sprint workflow
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Book a 20-minute walkthrough with an engineering specialist. We’ll show you how
              high-velocity teams cut PR wait times by over 50%.
            </p>

            <div className="mt-8 space-y-4 text-sm text-slate-700">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  @
                </span>
                <div>
                  <p className="font-semibold text-slate-900">Direct Solutions Team</p>
                  <p className="text-slate-500">hello@pulseflow.io</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  HQ
                </span>
                <div>
                  <p className="font-semibold text-slate-900">San Francisco & Bengaluru</p>
                  <p className="text-slate-500">24/5 Global Engineering Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
              {submitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">Demo Request Confirmed!</h3>
                  <p className="text-slate-600 max-w-md mx-auto text-sm">
                    Thanks, <span className="font-semibold text-slate-900">{formData.fullName}</span>.
                    We’ve sent a calendar invite link to{' '}
                    <span className="font-semibold text-indigo-600">{formData.workEmail}</span>.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        workEmail: '',
                        teamSize: '11-50 engineers',
                        message: '',
                      });
                    }}
                    className="mt-2 px-5 py-2.5 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-lg hover:bg-indigo-100 cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Aarav Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs font-medium text-rose-600">{errors.fullName}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="workEmail" className="block text-sm font-semibold text-slate-700 mb-1.5">
                        Work Email *
                      </label>
                      <input
                        id="workEmail"
                        type="email"
                        placeholder="aarav@company.com"
                        value={formData.workEmail}
                        onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                        className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                          errors.workEmail ? 'border-rose-500' : 'border-slate-300'
                        }`}
                      />
                      {errors.workEmail && (
                        <p className="mt-1 text-xs font-medium text-rose-600">{errors.workEmail}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      Engineering Team Size
                    </label>
                    <select
                      id="teamSize"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                      <option>1-10 engineers</option>
                      <option>11-50 engineers</option>
                      <option>51-200 engineers</option>
                      <option>200+ engineers</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-1.5">
                      What workflow bottleneck are you solving? *
                    </label>
                    <textarea
                      id="message"
                      rows="3"
                      placeholder="e.g., Slow PR reviews across 4 microservices teams..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl bg-white border text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
                        errors.message ? 'border-rose-500' : 'border-slate-300'
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs font-medium text-rose-600">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-sm shadow-md shadow-indigo-600/20 transition-all cursor-pointer"
                  >
                    Request Live Demo
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}