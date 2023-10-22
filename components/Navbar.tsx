import Link from "next/link";
import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="flex justify-between items-center py-4 px-2">
      <div className="flex items-center gap-[1ch]">
        <div className="w-5 h-5 bg-yellow-400 rounded-full" />
        <span className="text-sm font-semibold tracking-widest">
          James Laurie
        </span>
      </div>
      <div className="flex gap-12 text-md text-zinc-400">
        {isClient && (
          <Link
            href="https://docs.google.com/document/d/1qBF6Mz6ML_tyvgWOHzLG0s8jrz-Y_cIvfKkKjhMhdfQ/edit?usp=sharing"
            passHref={true}
          >
            <button className="bg-black text-white font-medium py-3 px-12 rounded-full w-60 lg:w-auto hover:bg-instagram">
              Resume
            </button>
          </Link>
        )}

        {/* <Link href="#" className="text-black font-medium">
          Home
        </Link>
        <Link href="#">Projects</Link>
        <Link href="#">Contact</Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
