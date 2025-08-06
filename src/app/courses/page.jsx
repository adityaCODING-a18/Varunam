// app/batches/page.tsx
import React from 'react';
import Navbar from '../Component/Navbar';
import BatchCard from './components/BatchCard';

const Page = () => {
  return (
    <>
      <div className="bg-[#D4FFFD] w-screen min-h-screen overflow-x-hidden m-0 p-0 text-black">
        <Navbar />

        <main className="max-w-4xl mx-auto p-6">
          <p className="text-lg 2xl:text-3xl font-bold text-center text-[#09817F] font-[poppins]">
            📚 Our Learning Batches
          </p>

          <BatchCard
            title="Pre‑Foundation Batch (Classes 6 & 7)"
            description="Lays the essential groundwork in Maths and Science for students entering classes 6 and 7. Strengthens conceptual clarity, analytical skills, and creativity through interactive methods."
            features={[
              'Conceptual learning aligned with CBSE/NCERT syllabus',
              'Olympiad preparation: NTSE, IMO, NSO & more',
              'Small batch size & personalized attention',
              'Frequent assessments: topic quizzes, weekly assignments',
              'Doubt-clearing sessions post-class',
              'Extensive study material: PDFs, worksheets, & revision kits',
            ]}
          />

          <BatchCard
            title="Foundation Batch (Classes 8 to 10)"
            description="Builds on foundational knowledge to tackle more advanced concepts. Balances school syllabus with competitive exam prep for Olympiads, JEE, and NEET."
            features={[
              'Thorough coverage of Maths, Science & English',
              'Live & recorded interactive classes with expert faculty',
              'Real-time doubt resolution and mentor support',
              'Structured test series: quizzes, mock exams',
              'Daily practice problems (DPP) & performance tracking',
              'Study content: digital notes, lecture PDFs, and revision materials',
            ]}
          />

          <BatchCard
            title="Physics Batch (Classes 11 & 12)"
            description="Prepares students for board exams and JEE/NEET with deep concept teaching and advanced problem-solving sessions."
            features={[
              'Detailed Physics topics: Mechanics, Electromagnetism, Thermodynamics, Modern Physics',
              'Advanced problem-solving workshops & numerical rigor',
              'Mock tests structured on NEET/JEE format',
              'Doubt-clearing clinics with faculty support',
              'Visual learning aids and interactive concept revision',
              'Regular progress feedback and tailored guidance',
            ]}
          />
        </main>
      </div>
    </>
  );
};

export default Page;

export const metadata = {
  title: 'Learning Batches | Pre-Foundation to JEE/NEET Prep',
  description: 'Explore our structured batches for Classes 6 to 12, including pre-foundation, foundation, and physics-focused programs to prepare for Olympiads, JEE, and NEET.',
  keywords: ['pre-foundation', 'foundation batch', 'JEE preparation', 'NEET preparation', 'class 6 to 12 batches', 'Olympiad training', 'Physics batch'],
  openGraph: {
    title: '📚 Learning Batches - Class 6 to 12 | JEE & NEET Prep',
    description: 'Our expert-designed batches cover foundational concepts and competitive exam preparation for students in classes 6 through 12.',
    url: 'https://varunam.com/courses',
    siteName: 'YourSiteName',
    type: 'website',
  },
};