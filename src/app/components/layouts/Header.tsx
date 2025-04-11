import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center p-4 bg-gray-900 text-white shadow-md space-x-30">
      <Image
        className="ml-10"
        src="/company_logo.png"
        alt="Company Logo"
        width={120}
        height={100}
      />
      <h1 className="text-lg font-semibold">Disaster Monitoring Dashboard</h1>
    </header>
  );
};

export default Header;
