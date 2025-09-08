"use client";

import GitHubIcon from "@public/github.svg";
import LinkedinIcon from "@public/linkedin.svg";
import React, { useState } from "react";
import { SocialLink } from "./SocialLink";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message.");
      }

      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // Clear form
    } catch (err) {
      setError((err as Error).message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <h1 className="text-2xl font-bold my-2 text-white-black">Contact Me</h1>
      {success && <p className="text-green-500">Message sent successfully!</p>}
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit} className="mx-auto bg-text max-w-2xl">
        <div className="flex flex-col items-center">
          <div className="flex justify-center gap-4">
            <div className="mt-7">
              <label htmlFor="name" className="text-background block">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-background text-text pl-1"
              />
            </div>

            <div className="mt-7">
              <label htmlFor="email" className="text-background block">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-background text-text pl-1"
              />
            </div>
          </div>

          <div className="mt-7">
            <label htmlFor="message" className="text-background block">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-background text-text pl-1"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="my-7 border border-background text-background p-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 hover:ring-2 hover:ring-orange-500 hover:ring-inset text-shadow-sm hover:[text-shadow:1px_1px_0px_var(--color-orange-500),-1px_1px_0px_var(--color-orange-500),1px_-1px_0px_var(--color-orange-500),-1px_-1px_0px_var(--color-orange-500)]"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
      <div className="mt-10 row-start-3 flex gap-[24px] flex-wrap items-center justify-center border-text">
        Connect on:{" "}
        <SocialLink
          href="https://www.linkedin.com/in/jon-wesneski"
          svgIcon={LinkedinIcon}
        />
        <SocialLink
          href="https://github.com/jonwesneski"
          svgIcon={GitHubIcon}
        />
      </div>
    </section>
  );
}
