"use client";
import ClientWrapper from "./components/ClientWrapper";
import "./styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
