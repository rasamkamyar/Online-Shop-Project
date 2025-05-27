import React from "react";
import { Header } from "../components";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <footer className="bg-white border-t border-gray-200 py-6 mt-8 text-center text-gray-500 text-sm shadow-sm">
        Developed By Rasam
      </footer>
    </div>
  );
};

export default Layout;
