import React from 'react';

// This component intentionally has design inconsistencies for testing

export function Card({ title, description, onClick }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      <button 
        onClick={onClick}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        Learn More
      </button>
    </div>
  );
}

// Inconsistent spacing: p-3 instead of p-4
export function SmallCard({ title }) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-3">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    </div>
  );
}

// Arbitrary color value - should be flagged
export function AlertBanner({ message }) {
  return (
    <div className="bg-[#ff6b6b] text-white p-4 rounded-lg">
      <p className="font-medium">{message}</p>
    </div>
  );
}

// Inconsistent border radius: rounded-2xl mixed with rounded-lg
export function Avatar({ src, name }) {
  return (
    <div className="flex items-center gap-3">
      <img 
        src={src} 
        alt={name}
        className="w-10 h-10 rounded-full"
      />
      <span className="text-sm font-medium text-gray-700">{name}</span>
    </div>
  );
}

// Arbitrary font size - should be flagged
export function HeroTitle({ children }) {
  return (
    <h1 className="text-[42px] font-black text-gray-900 leading-tight">
      {children}
    </h1>
  );
}

// Multiple similar colors: gray-600, gray-700, gray-800
export function Footer() {
  return (
    <footer className="bg-gray-100 p-6 mt-8">
      <p className="text-gray-600 text-sm">© 2024 Company</p>
      <nav className="mt-4 flex gap-4">
        <a className="text-gray-700 hover:text-gray-900 text-sm">About</a>
        <a className="text-gray-700 hover:text-gray-900 text-sm">Contact</a>
        <a className="text-gray-700 hover:text-gray-900 text-sm">Privacy</a>
      </nav>
    </footer>
  );
}

// Off-scale spacing: p-5, p-7
export function Badge({ label, variant }) {
  const variants = {
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
  };
  
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${variants[variant]}`}>
      {label}
    </span>
  );
}

// Arbitrary font family
export function CodeBlock({ code }) {
  return (
    <pre className="bg-gray-900 text-green-400 p-4 rounded-lg font-[Fira_Code] text-sm overflow-x-auto">
      <code>{code}</code>
    </pre>
  );
}

// Inconsistent shadows: shadow-sm, shadow-md, shadow-lg all used
export function CardGrid({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {children}
    </div>
  );
}

// Multiple font weights: normal, medium, semibold, bold, black
export function TextSample() {
  return (
    <div className="space-y-2">
      <p className="font-normal text-gray-600">Normal weight text</p>
      <p className="font-medium text-gray-600">Medium weight text</p>
      <p className="font-semibold text-gray-600">Semibold weight text</p>
      <p className="font-bold text-gray-600">Bold weight text</p>
      <p className="font-extrabold text-gray-600">Extrabold weight text</p>
    </div>
  );
}
