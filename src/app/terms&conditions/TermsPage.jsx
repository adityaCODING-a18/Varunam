"use client";
import React from 'react';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const TermsPage = () => {
  return (
    <div className="bg-[#F0F9FF] min-h-screen text-black font-[Poppins] p-5">
      <Navbar />

      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-2 mt-10 mb-40">
        <h1 className="text-3xl font-bold text-center text-[#0F172A] mb-6">Terms & Conditions</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-[#2563EB] mb-2">Welcome Message</h2>
          <p className="text-gray-700">
            Dear Student, <br />
            Welcome to <strong>Varunam</strong>! You’ve taken a powerful step towards achieving your goals. This handbook outlines all rules and regulations of Varunam. Please read it carefully to ensure a smooth journey with us.
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">1. Admission</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Admission is based on eligibility criteria and is non-transferable.</li>
            <li>Students must keep their contact info updated.</li>
            <li>Enrollment is complete only after filling the form, submitting photos, and signing the form.</li>
            <li>Identity cards are issued within 21 days of admission and must be carried at all times.</li>
            <li>Lost ID cards can be reissued with Rs. 100 processing fee within 14 working days.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">2. Batch Allocation</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Students must choose a batch at the time of enrollment.</li>
            <li>No changes allowed unless approved by Centre Head (Rs. 300 processing fee).</li>
            <li>ID cards will reflect batch details and must be updated in case of changes.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">3. Payment Terms & Study Material</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Payment can be made via cash, online, or DD depending on course type.</li>
            <li>Bounced cheques will incur Rs. 200 penalty and admission suspension.</li>
            <li>Study material is issued only upon fee clearance and with valid ID card.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">4. Admission Fee Policy</h3>
          <p className="text-gray-700">
            From March 2024, the admission fee is non-refundable.  
            <br />
            <strong>Admission Fee:</strong> ₹500/- | <strong>LST Plus:</strong> ₹500/-  
            <br />
            <strong>Tuition:</strong> ₹5000 - ₹15,000 (standard-wise)
          </p>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">5. Refund Policy</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Refunds depend on when the request is made (relative to batch start date).</li>
            <li>Within 7 days, there is 0% deduction.</li>
            <li>Up to 50% may be deducted depending on timing and course duration.</li>
            <li>After 45 days, there is no any refund.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">6. Scholarships & Discounts</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Merit-cum-Means scholarship offered case-by-case with valid income and marks proof.</li>
            <li>Discounts for ex-students and children of defense personnel, approved by Director.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">7. Discipline & Attendance</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Minimum 75% attendance is mandatory. Absences must be informed in advance.</li>
            <li>Students with 7 unnotified absences may be removed from rolls.</li>
            <li>Punctuality and respectful class behavior is expected at all times.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">8. Communication</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-1">
            <li>Notice boards and Centre Executives are the official sources of updates.</li>
            <li>Programme changes must be checked regularly. No objections = automatic approval.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-xl font-semibold text-[#1D4ED8] mb-2">9. Feedback & Grievance Redressal</h3>
          <p className="text-gray-700">
            We actively seek student feedback to improve our services. Grievances may be reported to the Centre Head for resolution.
          </p>
        </section>
      </div>
      <Footer />
    </div>

  );
};

export default TermsPage;
