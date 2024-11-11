"use client"

import React, { useState, useEffect } from 'react';
import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const AnimatedButton = () => {
  const [isExploding, setIsExploding] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsExploding(true);
      setTimeout(() => setIsExploding(false), 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Link href="/contact">
        <Button 
          className={`transition-all duration-300 ${isExploding ? 'animate-pulse' : ''}`}
          onMouseEnter={() => setIsExploding(true)}
          onMouseLeave={() => setIsExploding(false)}
        >
          Hire me
        </Button>
      </Link>
      {isExploding && (
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-accent rounded-full animate-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const AnimatedText = ({ text }) => {
  return (
    <span className="inline-block">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block transition-all duration-300 hover:text-accent animate-jump"
          style={{
            animationDelay: `${index * 0.1}s`,
          }}
        >
          {char}
        </span>
      ))}
    </span>
  );
};

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            <AnimatedText text="Jonathan" />
            <span style={{ color: '#00ff99' }}>.</span>
          </h1>
        </Link>
        
        {/*desktop nav & hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav/>
          <AnimatedButton />
        </div>
        
        {/*mobile nav & hire me button*/}
        <div className="xl:hidden">
          <MobileNav/>
        </div>
      </div>
    </header>
  );
};

export default Header;