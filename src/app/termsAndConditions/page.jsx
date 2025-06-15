"use client"
import React from 'react';
import Footer from '../Components/Footer';
import Navbar from './Navbar';

const Page = () => {
  return (
    <>
      <div id="full-page" className="overflow-x-hidden bg-black/1 font-poppins">
        <Navbar />
        <div className="max-w-5xl mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
          
          <section className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Welcome Message</h2>
            <p className="leading-relaxed">
              Dear Student, <br />
              Welcome to Varunam! You’ve taken a powerful step towards achieving your goals. This handbook outlines all rules and regulations of Varunam. Please read it carefully to ensure a smooth journey with us.
            </p>
          </section>

          <Section title="1. Admission">
            <ul className="list-disc list-inside space-y-2">
              <li>Admission is based on eligibility criteria and is non-transferable.</li>
              <li>Students must keep their contact info updated.</li>
              <li>
                Enrollment is complete only after filling the form, submitting photos, and signing the form.
              </li>
              <li>
                Identity cards are issued within 21 days of admission and must be carried at all times.
              </li>
              <li>
                Lost ID cards can be reissued with Rs. 100 processing fee within 14 working days.
              </li>
            </ul>
          </Section>

          <Section title="2. Batch Allocation">
            <ul className="list-disc list-inside space-y-2">
              <li>Students must choose a batch at the time of enrollment.</li>
              <li>No changes allowed unless approved by Centre Head (Rs. 300 processing fee).</li>
              <li>ID cards will reflect batch details and must be updated in case of changes.</li>
            </ul>
          </Section>

          <Section title="3. Payment Terms & Study Material">
            <ul className="list-disc list-inside space-y-2">
              <li>Payment can be made via cash, online, or DD depending on course type.</li>
              <li>Bounced cheques will incur Rs. 200 penalty and admission suspension.</li>
              <li>Study material is issued only upon fee clearance and with valid ID card.</li>
            </ul>
          </Section>

          <Section title="4. Admission Fee Policy">
            <p>
              From March 2024, the admission fee is non-refundable.
              <br />
              <strong>Admission Fee:</strong> ₹500/- | <strong>LST Plus:</strong> ₹500/-<br />
              <strong>Tuition:</strong> ₹5000 - ₹10,000 (standard-wise)
            </p>
          </Section>

          <Section title="5. Refund Policy">
            <ul className="list-disc list-inside space-y-2">
              <li>Refunds depend on when the request is made (relative to batch start date).</li>
              <li>Up to 50% may be deducted depending on timing and course duration.</li>
              <li>No refunds if the student has &lt; 50% marks in graduation.</li>
            </ul>
          </Section>

          <Section title="6. Scholarships & Discounts">
            <ul className="list-disc list-inside space-y-2">
              <li>Merit-cum-Means scholarship offered case-by-case with valid income and marks proof.</li>
              <li>Discounts for ex-students and children of defense personnel, approved by Director.</li>
            </ul>
          </Section>

          <Section title="7. Discipline & Attendance">
            <ul className="list-disc list-inside space-y-2">
              <li>Minimum 75% attendance is mandatory. Absences must be informed in advance.</li>
              <li>Students with 7 unnotified absences may be removed from rolls.</li>
              <li>Punctuality and respectful class behavior is expected at all times.</li>
            </ul>
          </Section>

          <Section title="8. Communication">
            <ul className="list-disc list-inside space-y-2">
              <li>Notice boards and Centre Executives are the official sources of updates.</li>
              <li>Programme changes must be checked regularly. No objections = automatic approval.</li>
            </ul>
          </Section>

          <Section title="9. Feedback & Grievance Redressal">
            <p>
              We actively seek student feedback to improve our services. Grievances may be reported to the Centre Head for resolution.
            </p>
          </Section>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

const Section = ({ title, children }) => (
  <section className="mb-6">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    {children}
  </section>
);

export default Page;
