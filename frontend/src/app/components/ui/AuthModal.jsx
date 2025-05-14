"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AuthModal({ isOpen, onClose, initialMode = "login" }) {
  const [mode, setMode] = useState(initialMode);
  
  useEffect(() => {
    if (isOpen) {
      // Prevent scrolling when modal is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const switchMode = () => {
    setMode(mode === "login" ? "register" : "login");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[6000] flex items-center justify-center bg-black/70">
      <AnimatePresence>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-neutral-900 p-8 rounded-xl w-full max-w-md border border-neutral-800 shadow-xl"
        >
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">
              {mode === "login" ? "Login" : "Register"}
            </h2>
            <button 
              onClick={onClose}
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>
          
          {mode === "login" ? (
            <LoginForm switchMode={switchMode} />
          ) : (
            <RegisterForm switchMode={switchMode} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function LoginForm({ switchMode }) {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your password"
          required
        />
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium"
        >
          Login
        </button>
      </div>
      
      <div className="text-center mt-4">
        <button
          type="button"
          onClick={switchMode}
          className="text-sm text-neutral-400 hover:text-blue-400 transition-colors"
        >
          Don't have an account? Register
        </button>
      </div>
    </form>
  );
}

function RegisterForm({ switchMode }) {
  return (
    <form className="space-y-4">
      <div>
        <label htmlFor="username" className="block text-sm font-medium text-neutral-300 mb-1">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Choose a username"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Enter your email"
          required
        />
      </div>
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-neutral-300 mb-1">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Create a password"
          required
        />
      </div>
      
      <div className="pt-2">
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 px-4 rounded-md hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-medium"
        >
          Register
        </button>
      </div>
      
      <div className="text-center mt-4">
        <button
          type="button"
          onClick={switchMode}
          className="text-sm text-neutral-400 hover:text-blue-400 transition-colors"
        >
          Already have an account? Login
        </button>
      </div>
    </form>
  );
} 