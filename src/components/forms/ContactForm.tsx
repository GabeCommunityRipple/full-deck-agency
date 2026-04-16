"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod/v4";
import { useEffect, useRef, useState } from "react";
import Input from "@/components/ui/Input";

const schema = z.object({
  first_name: z.string().min(1, "First name is required"),
  last_name: z.string().min(1, "Last name is required"),
  phone: z.string().min(1, "Phone is required"),
  email: z.email("Please enter a valid email"),
  website: z.string().optional(),
  industry: z.string().min(1, "Industry is required"),
  message: z.string().optional(),
  company_website: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

const INDUSTRY_OPTIONS = [
  "Roofing",
  "HVAC",
  "Plumbing",
  "Deck & Home Building",
  "Landscaping",
  "Painting",
  "Electrical",
  "Flooring",
  "Windows & Doors",
  "General Contracting",
  "Other Home Services",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const renderTimeRef = useRef<number>(0);

  useEffect(() => {
    renderTimeRef.current = Date.now();
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, form_render_time: renderTimeRef.current }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-bold text-brand-dark-gray mb-2">Thank you!</p>
        <p className="text-gray-600">We&apos;ll be in touch within 1 business day.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      {/* Honeypot: hidden from humans, typically filled by bots. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label>
          Company Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("company_website")}
          />
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="First Name *"
          error={errors.first_name?.message}
          {...register("first_name")}
          placeholder="John"
        />
        <Input
          label="Last Name *"
          error={errors.last_name?.message}
          {...register("last_name")}
          placeholder="Smith"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Input
          label="Phone *"
          type="tel"
          error={errors.phone?.message}
          {...register("phone")}
          placeholder="(540) 555-0100"
        />
        <Input
          label="Business Email *"
          type="email"
          error={errors.email?.message}
          {...register("email")}
          placeholder="john@company.com"
        />
      </div>
      <Input
        label="Current Website"
        {...register("website")}
        placeholder="https://yoursite.com"
      />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          What Industry Are You In? *
        </label>
        <select
          {...register("industry")}
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red text-sm"
        >
          <option value="">Select your industry...</option>
          {INDUSTRY_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.industry && (
          <p className="mt-1 text-sm text-red-600">{errors.industry.message}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Tell Us About Your Needs
        </label>
        <textarea
          {...register("message")}
          rows={4}
          placeholder="Tell us about your business and what you're looking to achieve..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-red resize-none text-sm"
        />
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-brand-red hover:bg-brand-red-hover text-white py-3 rounded-lg font-bold text-base transition-colors disabled:opacity-50 disabled:cursor-not-allowed uppercase tracking-wide"
      >
        {status === "loading" ? "Sending..." : "Get In Touch"}
      </button>
    </form>
  );
}
