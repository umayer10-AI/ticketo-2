"use client";

import { useForm } from "react-hook-form";

export default function OrganizerOrganization() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    reset();
  };

  return (
    <div className="max-w-4xl mx-auto rounded-3xl border border-white/10 bg-black p-8">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white">
          Create Organization
        </h2>
        <p className="mt-2 text-gray-400">
          Add your organization details and start managing events.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Organization Name */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Organization Name
            </label>
            <input
              type="text"
              placeholder="Ticketo Inc."
              {...register("name", {
                required: "Organization name is required",
              })}
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Contact Email
            </label>
            <input
              type="email"
              placeholder="contact@ticketo.com"
              {...register("email", {
                required: "Email is required",
              })}
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Website */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Website
            </label>
            <input
              type="url"
              placeholder="https://yourcompany.com"
              {...register("website")}
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
          </div>

          {/* Logo URL */}
          <div>
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Logo URL
            </label>
            <input
              type="url"
              placeholder="https://example.com/logo.png"
              {...register("logo", {
                required: "Logo URL is required",
              })}
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
            {errors.logo && (
              <p className="mt-1 text-sm text-red-400">
                {errors.logo.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Address
            </label>
            <input
              type="text"
              placeholder="Dhaka, Bangladesh"
              {...register("address", {
                required: "Address is required",
              })}
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
            {errors.address && (
              <p className="mt-1 text-sm text-red-400">
                {errors.address.message}
              </p>
            )}
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="mb-2 block text-sm font-medium text-gray-300">
              Description
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your organization..."
              {...register("description", {
                required: "Description is required",
              })}
              className="w-full rounded-xl border border-white/10 bg-zinc-900 px-4 py-3 text-white outline-none focus:border-cyan-500"
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-400">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-700 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
        >
          {isSubmitting ? "Creating..." : "Create Organization"}
        </button>
      </form>
    </div>
  );
}