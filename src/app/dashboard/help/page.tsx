"use client";

import FAQSection from "@/app/components/help/FAQSection";
import SupportForm from "@/app/components/help/SupportForm";
import TutorialSection from "@/app/components/help/TutorialSection";
import React from "react";

const HelpPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-2xl font-bold mb-4">Help & Support</h1>
      <div className="space-y-6">
        <FAQSection />
        <TutorialSection />
        <SupportForm />
      </div>
    </div>
  );
};

export default HelpPage;
