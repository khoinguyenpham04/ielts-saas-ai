"use client";
import React, { useState } from "react";
import { BackgroundBeams } from "../components/ui/background-beams";

export function BackgroundBeamsDemo() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can add additional validation or processing here if needed
    e.currentTarget.submit();
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-900 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
          Join the waitlist
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Get instant access to our state of the art project and join the waitlist.
        </p>
        <form
          action="https://formspree.io/f/mgveagze" // Replace with your Formspree form ID
          method="POST"
          onSubmit={handleSubmit}
          className="relative z-10 mt-6"
        >
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-lg border border-neutral-700 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-500 text-neutral-200 text-lg"
            required
          />
          <button
            type="submit"
            className="mt-4 w-full rounded-lg bg-blue-700 text-white p-4 text-lg font-semibold hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Join Now
          </button>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}
