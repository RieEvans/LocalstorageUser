import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="bg-slate-900 w-full">
      <div className="flex items-center p-5 gap-5">
        <h1 className="text-white text-3xl">UserEncoder</h1>
        <nav className="flex items-center gap-5 justify-between text-white ">
          <Link>Home</Link>
          <Link>Features</Link>
        </nav>
      </div>
    </header>
  );
};
